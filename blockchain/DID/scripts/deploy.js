const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const DIDRegistry = await ethers.getContractFactory("DIDRegistry");
    const registry = await DIDRegistry.deploy();

    await registry.deployed();
    console.log("DID Registry deployed at:", registry.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
