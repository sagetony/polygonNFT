const { expect } = require("chai");
const { ethers } = require("hardhat");
let polygonNFT, user1, user2, user3, user4;

describe("polygon NFT", function () {
  before(async () => {
    const contractNFT = await ethers.getContractFactory("MaticNFT");
    polygonNFT = await contractNFT.deploy();
    await polygonNFT.deployed();

    [user1, user2, user3, user4] = await ethers.getSigners();
  });

  it("Minted token to user 2", async () => {
    expect(await polygonNFT.balanceOf(user2.address)).to.equal(0);
    await polygonNFT.mintNFT(user2.address, "https:juju-token");
    expect(await polygonNFT.balanceOf(user2.address)).to.equal(1);
  });
  it("should approve user3 of user2's NFT", async () => {
    expect(await polygonNFT.getApproved(1)).to.equal(
      "0x0000000000000000000000000000000000000000"
    );
    await polygonNFT.connect(user2).approve(user3.address, 1);
    expect(await polygonNFT.getApproved(1)).to.equal(user3.address);
  });
  it("should transfer user2's NFT to user4 by user3", async () => {
    expect(await polygonNFT.balanceOf(user4.address)).to.equal(0);
    await polygonNFT
      .connect(user3)
      .transferFrom(user2.address, user4.address, 1);
    expect(await polygonNFT.balanceOf(user4.address)).to.equal(1);
  });
});
