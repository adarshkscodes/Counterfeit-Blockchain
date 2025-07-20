# Certificate Issuance dApp

A full-stack decentralized application (dApp) built on Ethereum for institutional organizations to issue verifiable certificates to students. Certificates are stored as unique hashes on the blockchain, ensuring immutability and easy verification of authenticity by third parties. This project leverages blockchain technology to prevent fraud and provide tamper-proof credentials.

## Features

- **Certificate Issuance:** Institutions (contract owners) can issue certificates by storing a keccak256 hash of certificate details (e.g., student name, course, date) on-chain.
- **Verification:** Anyone can verify a certificate's genuineness by checking the hash against the blockchain, retrieving validity and associated details.
- **Access Control:** Uses OpenZeppelin's Ownable to restrict issuance to the contract owner.
- **Event Emission:** Emits events for issued certificates, enabling real-time monitoring.
- **Frontend Interface:** A React-based UI for connecting wallets (via MetaMask), issuing, and verifying certificates.
- **Local Development:** Supports testing on Hardhat's localhost network; deployable to Ethereum testnets like Sepolia.

## Tech Stack

- **Blockchain:** Ethereum (Solidity ^0.8.20)
- **Smart Contract Development:** Hardhat, OpenZeppelin Contracts
- **Frontend:** React.js, ethers.js, Web3Modal
- **Testing:** Chai, Mocha (via Hardhat)
- **Deployment:** Hardhat scripts for local and testnet deployment

## Prerequisites

- Node.js (v16+)
- Yarn or npm
- MetaMask wallet for testing
- Git (for cloning the repository)
- Optional: Infura/Alchemy API key and Ethereum testnet account for Sepolia deployment

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/cert-dapp.git
cd cert-dapp

2. Install root dependencies:
npm install

3. Install frontend dependencies:
cd frontend
npm install
cd ..


4. (Optional) Set up environment variables in a `.env` file in the root:
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_API_KEY
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY


## Usage

### Smart Contract Development

1. Compile contracts:
npx hardhat compile

2. Run tests:
npx hardhat test

3. Deploy locally:
- Start Hardhat node: `npx hardhat node`
- Deploy: `npx hardhat run scripts/deploy.js --network hardhat`
- Note the contract address and update `frontend/src/App.js`

### Frontend

1. Start the React app:
cd frontend
npm start

2. Open `http://localhost:3000` in your browser.
3. Connect MetaMask to Hardhat localhost (RPC: http://127.0.0.1:8545, Chain ID: 31337).
4. Import a Hardhat account (e.g., Account #0 as owner) and test issuance/verification.

### Deployment to Sepolia Testnet

1. Update `hardhat.config.js` with your RPC URL and private key.
2. Deploy:
npx hardhat run scripts/deploy.js –network sepolia
3. Update the contract address in `frontend/src/App.js` and switch MetaMask to Sepolia.

## Project Structure

- `contracts/`: Solidity smart contracts (e.g., `CertificateIssuer.sol`).
- `scripts/`: Deployment scripts (e.g., `deploy.js`).
- `test/`: Unit tests (e.g., `CertificateIssuer.js`).
- `frontend/`: React application source code.
- `hardhat.config.js`: Hardhat configuration.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure tests pass and follow best practices for Solidity and React.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For questions or issues, open a GitHub issue.
