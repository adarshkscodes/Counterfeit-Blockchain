// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CertificateIssuer is Ownable {
    mapping(bytes32 => bool) private certificates;
    mapping(bytes32 => string) private certificateDetails; // Optional: Store metadata like student name

    event CertificateIssued(bytes32 indexed certHash, string details);

    constructor() Ownable(msg.sender) {}

    function issueCertificate(bytes32 certHash, string memory details) public onlyOwner {
        require(!certificates[certHash], "Certificate already issued");
        certificates[certHash] = true;
        certificateDetails[certHash] = details;
        emit CertificateIssued(certHash, details);
    }

    function verifyCertificate(bytes32 certHash) public view returns (bool isValid, string memory details) {
        isValid = certificates[certHash];
        details = certificateDetails[certHash];
        return (isValid, details);
    }
}
