# XBB (ERC20) - mint and get balance

Frontend that allows users to connect their wallet to the Sepolia network and mint [XBB tokens](https://sepolia.etherscan.io/address/0x939ab64e74Fd7f4129F9a0b95Fec6a8C240d7aee). It also displays the user's current account and the token address.

The code uses the Ethers library to interact with the Ethereum blockchain and the Xibalba20.json file to import the contract ABI.

Features:
- Checks if the user is connected to the Sepolia network and displays a message if not
- Allows the user to connect their wallet to the network
- Allows the user to enter a mint amount and mint XBB tokens
- Displays the balance of the user's XBB tokens
- Displays logs of the user's actions

## Getting Started

Prerequisites
To get started, you'll need to have the following installed on your system:

- Node.js 
- Git 

### Installing

First, clone this repository using Git:

```
git clone https://github.com/edwardtay/solidity-erc20.git
```

Next, navigate to the project directory and install the dependencies:

```
cd frontend
npm install
```

Running the app
To start the app, run

```
npm run dev
```

## License

This contract is licensed under the MIT License.
