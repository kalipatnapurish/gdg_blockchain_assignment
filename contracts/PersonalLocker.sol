// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

contract block_contr {
    address public owner;
    string private secretMessage;
    string private password;

    event MessageUpdated(string oldMessage, string newMessage);

    modifier onlyOwner() {
        require(msg.sender == owner, "NotOwner");
        _;
    }

    constructor(string memory initialMessage, string memory initialPassword) {
        owner = msg.sender;
        secretMessage = initialMessage;
        password = initialPassword;
    }

    function updateMessage(string memory newMessage, string memory pass) public onlyOwner {
        require(keccak256(bytes(pass)) == keccak256(bytes(password)), "InvalidPassword");
        string memory oldMessage = secretMessage;
        secretMessage = newMessage;
        emit MessageUpdated(oldMessage, newMessage);
    }

    function readMessage() public view returns (string memory) {
        return secretMessage;
    }

    function printPassword() public view returns (string memory) {
        return password;
    }

    receive() external payable {}

    fallback() external payable {}
}
    function withdraw(uint256 amount) external onlyOwner nonReentrant {
        if (amount > address(this).balance) revert InsufficientFunds();
        (bool ok, ) = payable(owner).call{value: amount}("");
        if (!ok) revert TransferFailed();
        emit Withdrawn(owner, amount); // 🔥 added this
    }

    /// @notice check contract balance
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
