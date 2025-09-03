const { expect } = require("chai");
const { ethers } = require("hardhat");
const { parseEther } = require("ethers/lib/utils"); // Import parseEther directly

describe("PersonalLocker", function () {
  let locker, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const Locker = await ethers.getContractFactory("PersonalLocker");
    locker = await Locker.deploy();
  });

  it("Should set the right owner", async function () {
    expect(await locker.owner()).to.equal(owner.address);
  });

  it("Should accept deposits and emit Deposited", async function () {
    const depositAmount = parseEther("1.0");
    await expect(
      locker.connect(addr1).deposit({ value: depositAmount })
    )
      .to.emit(locker, "Deposited")
      .withArgs(addr1.address, depositAmount);

    expect(await locker.getBalance()).to.equal(depositAmount);
  });

  it("Should allow only owner to withdraw", async function () {
    const depositAmount = parseEther("1.0");
    await locker.connect(addr1).deposit({ value: depositAmount });

    await expect(
      locker.connect(addr1).withdraw(depositAmount)
    ).to.be.revertedWithCustomError(locker, "NotOwner");

    await expect(locker.connect(owner).withdraw(depositAmount))
      .to.emit(locker, "Withdrawn")
      .withArgs(owner.address, depositAmount);
  });

  it("Should fail if withdrawing more than balance", async function () {
    await expect(
      locker.withdraw(parseEther("1.0"))
    ).to.be.revertedWithCustomError(locker, "InsufficientFunds");
  });
});


