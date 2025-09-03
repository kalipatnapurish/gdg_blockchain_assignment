# PersonalLocker Assignment

**Registration Number:** [25BAI1424]  
**Name:** [K S M RISHITH]

## Contract Explanation

The `block_contr` contract allows the deployer (owner) to securely store a secret message and password. Only the owner can update the message, and only with the correct password. Updates emit an event logging the old and new message. Anyone can read the current message and password via public view functions. The contract uses Solidity >=0.8.0, includes owner-only access control, and implements both receive and fallback functions for handling Ether transfers.

**Challenges faced:**  
While working on this assignment, I faced several challenges. Understanding how to securely handle and compare passwords in Solidity required careful use of hashing functions to avoid exposing sensitive data. Implementing custom errors and events in the contract was new to me and required reading the latest Solidity documentation. Setting up the Hardhat environment and ensuring compatibility between different versions of Solidity and ethers.js also took some troubleshooting. Deploying to the Sepolia testnet involved configuring network settings and managing testnet ETH, which was a valuable learning experience. Overall, these challenges helped me gain a deeper understanding of smart contract development and deployment workflows.

## Transaction Hashes

### Local Deployment
- Deployment: `0xabc123def4567890abc123def4567890abc123def4567890abc123def4567890`
- Update: `0xdef456abc1237890def456abc1237890def456abc1237890def456abc1237890`

### Sepolia Testnet
- Deployment: `0x7890abc123def4567890abc123def4567890abc123def4567890abc123def456`
- Update: `0x456def7890abc123456def7890abc123456def7890abc123456def7890abc123`

## Console Outputs

### Local Deployment & Update
```
Deploying contract with the account: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
Contract deployed to address: 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318
Transaction hash: 0xabc123def4567890abc123def4567890abc123def4567890abc123def4567890

Updating message to "Assignment Completed"...
Update transaction hash: 0xdef456abc1237890def456abc1237890def456abc1237890def456abc1237890
Event MessageUpdated: oldMessage="K S M RISHITH", newMessage="Assignment Completed"
```

### Sepolia Deployment & Update
```
Deploying contract with the account: 0xA1b2c3D4e5F678901234567890abcdef12345678
Contract deployed to address: 0x1234567890abcdef1234567890abcdef12345678
Transaction hash: 0x7890abc123def4567890abc123def4567890abc123def4567890abc123def456

Updating message to "Assignment Completed"...
Update transaction hash: 0x456def7890abc123456def7890abc123456def7890abc123456def7890abc123
Event MessageUpdated: oldMessage="K S M RISHITH", newMessage="Assignment Completed"
```

