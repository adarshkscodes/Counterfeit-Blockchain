require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {} // Default localhost config; no changes needed
    // Optional: Keep Sepolia for later
    // sepolia: {
    //   url: "https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY",
    //   accounts: ["YOUR_PRIVATE_KEY"]
    // }
  }
};
