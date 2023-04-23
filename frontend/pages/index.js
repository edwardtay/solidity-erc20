import abi from '../utils/Xibalba20.json';
import { ethers } from "ethers";
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'

export default function Home() {
  // Contract Address & ABI
  const contractAddress = "0x939ab64e74Fd7f4129F9a0b95Fec6a8C240d7aee";
  const contractABI = abi.abi;

  // Component state
  const [currentAccount, setCurrentAccount] = useState("");
  const [mintAmount, setMintAmount] = useState("");
  const [mintedTokens, setMintedTokens] = useState("");
  const [logs, setLogs] = useState([]);

  const addLog = (log) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  };

  const [isConnectedToSepolia, setIsConnectedToSepolia] = useState(false);

  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;
  
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      console.log("chainId: ", chainId);
  
      if (chainId !== '0xaa36a7' && chainId !== '11155111') {
        console.log("Please connect to the Sepolia network");
        addLog("Please connect to the Sepolia network");
        setIsConnectedToSepolia(false);
        return;
      }
  
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      console.log("accounts: ", accounts);
  
      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
        setIsConnectedToSepolia(true);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }
  
  

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

  if (!ethereum) {
    console.log("please install MetaMask");
    addLog("Please install MetaMask");
  }

  const accounts = await ethereum.request({
    method: 'eth_requestAccounts'
  });

  setCurrentAccount(accounts[0]);
  addLog(`Wallet connected: ${accounts[0]}`);
} catch (error) {
  console.log(error);
  addLog(`Error: ${error.message}`);
}
}

  const mintTokens = async (amount) => {
    try {
      const { ethereum } = window;

  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    const signer = provider.getSigner();
    const erc20 = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    console.log("minting tokens..");
    addLog("Minting tokens..");
    const mintTxn = await erc20.mint(currentAccount, ethers.utils.parseEther(mintAmount));

    await mintTxn.wait();

    console.log("mined ", mintTxn.hash);
    addLog(`Tokens mined: ${mintTxn.hash}`);
    const receipt = await mintTxn.wait();
    const mintedAmount = ethers.utils.formatEther(receipt.events[0].args[2]);

    setMintedTokens(mintedAmount);
    console.log(`${mintedAmount} tokens minted!`);
    addLog(`${mintedAmount} tokens minted!`);
  }
} catch (error) {
  console.log(error);
  addLog(`Error: ${error.message}`);
}
};

  const getBalance = async () => {
    try {
      const { ethereum } = window;

  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    const signer = provider.getSigner();
    const erc20 = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );

    const balance = await erc20.balanceOf(currentAccount);
    console.log("balance: ", ethers.utils.formatEther(balance));
    addLog(`Balance: ${ethers.utils.formatEther(balance)}`);
  }
    } catch (error) {
      console.log(error);
      addLog(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);

  const renderLogs = () => {
  if (logs.length === 0) {
    return null;
  }

  const lastLog = logs[logs.length - 1];

  return <p>{lastLog}</p>;
};


const renderContent = () => {
  return (
    <div>
      <p>Current Account: {currentAccount}</p>
      <p>Token Address: {contractAddress}</p>
      {isConnectedToSepolia ? (
      <div>
        <input
          type="number"
          placeholder="Mint Amount"
          value={mintAmount}
          onChange={(e) => setMintAmount(e.target.value)}
        />
        <button
          type="button"
          onClick={mintTokens}
        >
          Mint Tokens
        </button>

        <button
          type="button"
          onClick={getBalance}
        >
          Get Balance
        </button>
      </div>
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>Please connect to the Sepolia network</p>
        )}
      {logs.length > 0 && renderLogs()}
    </div>
  );
};


  return (
    <div className={styles.container}>
      <Head>
        <title>🪙XBB - Mint and Get Balance</title>
        <meta name="description" content="Mint XBB tokens and check balance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🪙XBB - Mint and Get Balance
        </h1>

        {currentAccount ? (
          renderContent()
        ) : (
          <button onClick={connectWallet}> Connect your wallet </button>
        )}
      </main>

    </div>
  );
}

