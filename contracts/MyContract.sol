// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract TaxCalculator {
    uint256 public taxAmount;

    function calculateTax(uint256 amount, uint256 taxRate) public {
        taxAmount = (amount * taxRate) / 100;
    }

    function getTaxAmount() public view returns (uint256) {
        return taxAmount;
    }
}
