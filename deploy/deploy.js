const { ethers } = require("hardhat");

async function main() {
  const contractNFT = await ethers.getContractFactory("polygonNFT");
  const deployedContract = await contractNFT.deploy();
  deployedContract.deployed();
  console.log(`The NFT contact address is ${deployedContract.address}`);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
