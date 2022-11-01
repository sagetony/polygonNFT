const { ethers } = require("hardhat");

async function main() {
  const contractNFT = await ethers.getContractFactory("MaticNFT");
  const deployedContract = await contractNFT.deploy();
  deployedContract.deployed();
  console.log(`The NFT contact address is ${deployedContract.address}`);
  console.log(deployedContract.getDeployTransaction());
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
