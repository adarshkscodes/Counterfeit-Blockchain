const hre = require("hardhat");

async function main() {
  const CertificateIssuer = await hre.ethers.getContractFactory("CertificateIssuer");
  const certIssuer = await CertificateIssuer.deploy();
  await certIssuer.waitForDeployment();
  console.log("CertificateIssuer deployed to:", await certIssuer.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
