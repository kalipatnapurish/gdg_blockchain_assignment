const hre = require("hardhat");

async function main() {
  const Locker = await hre.ethers.getContractFactory("PersonalLocker");
  const locker = await Locker.deploy();

console.log(`PersonalLocker deployed to: ${await locker.getAddress()}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
