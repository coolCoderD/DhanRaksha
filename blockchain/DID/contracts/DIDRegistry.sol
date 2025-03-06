// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DIDRegistry {
    struct DID {
        string didDocument;
        bool exists;
    }

    mapping(address => DID) public dids;

    event DIDCreated(address indexed owner, string didDocument);
    event DIDUpdated(address indexed owner, string didDocument);

    function createDID(string memory didDocument) public {
        require(!dids[msg.sender].exists, "DID already exists");

        dids[msg.sender] = DID(didDocument, true);
        emit DIDCreated(msg.sender, didDocument);
    }

    function updateDID(string memory didDocument) public {
        require(dids[msg.sender].exists, "DID does not exist");

        dids[msg.sender].didDocument = didDocument;
        emit DIDUpdated(msg.sender, didDocument);
    }

    function getDID(address user) public view returns (string memory) {
        require(dids[user].exists, "DID does not exist");
        return dids[user].didDocument;
    }
}
