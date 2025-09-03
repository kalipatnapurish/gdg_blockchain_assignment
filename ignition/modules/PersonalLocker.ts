import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("PersonalLockerModule", (m) => {
  const locker = m.contract("PersonalLocker"); // no constructor arguments
  return { locker };
});
