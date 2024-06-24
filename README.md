# Tax Calculator DApp

A simple decentralized application (DApp) for calculating tax based on an amount and tax rate using a smart contract.

## Description

This project demonstrates a decentralized application for calculating tax using a smart contract deployed on a blockchain. The DApp includes a web-based frontend where users can input an amount and a tax rate to compute the tax amount, which is then displayed on the frontend. The backend is powered by a Solidity smart contract that performs the tax calculation.

## Getting Started

### Installing

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tax-calculator-dapp.git
   ```
2. Navigate to the project directory:
   ```
   cd tax-calculator-dapp
   ```
3. Install the necessary dependencies:
   ```
   npm install
   ```

### Executing program

1. Start the local blockchain (e.g., Ganache):
   ```
   ganache-cli
   ```
2. Compile and deploy the smart contract:
   ```
   truffle compile
   truffle migrate
   ```
3. Launch the web application:
   ```
   npm run dev
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Help

If you encounter common issues, consider the following troubleshooting tips:
1. Ensure Ganache is running on the specified port.
2. Verify the contract is deployed by checking the migration status:
   ```
   truffle migrate --reset
   ```
3. Consult the Truffle documentation for additional commands:
   ```
   truffle help
   ```

## Authors

Pramod Prajapat  
[Github](https://github.com/pramodprajapatcse)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

```solidity
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
```
