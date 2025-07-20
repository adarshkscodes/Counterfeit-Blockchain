const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CertificateIssuer", function () {
  let CertificateIssuer, certIssuer, owner, other;

  beforeEach(async function () {
    [owner, other] = await ethers.getSigners();
    CertificateIssuer = await ethers.getContractFactory("CertificateIssuer");
    certIssuer = await CertificateIssuer.deploy();
    await certIssuer.waitForDeployment();
  });

  it("Should issue a certificate", async function () {
    const certHash = ethers.keccak256(ethers.toUtf8Bytes("test-cert"));
    await certIssuer.issueCertificate(certHash, "John Doe - Blockchain Course");
    const [isValid, details] = await certIssuer.verifyCertificate(certHash);
    expect(isValid).to.be.true;
    expect(details).to.equal("John Doe - Blockchain Course");
  });

  it("Should not allow non-owner to issue", async function () {
    const certHash = ethers.keccak256(ethers.toUtf8Bytes("test-cert"));
    await expect(
      certIssuer.connect(other).issueCertificate(certHash, "Details")
    ).to.be.revertedWithCustomError(certIssuer, "OwnableUnauthorizedAccount")
      .withArgs(other.address);
  });
});
