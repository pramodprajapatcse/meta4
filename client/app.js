const contractAddress = '0xc540E6C2f878956118c00f24566e63A62942E47F'.trim();
const contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "taxAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "taxRate",
        "type": "uint256"
      }
    ],
    "name": "calculateTax",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTaxAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

async function load() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error('User denied account access');
        }
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    window.account = accounts[0];
    console.log('Account:', window.account);

    window.myContract = new web3.eth.Contract(contractABI, contractAddress);
    console.log('Contract:', window.myContract);

    updateTaxAmount();
}

async function calculateTax() {
    const amount = document.getElementById('amount').value;
    const taxRate = document.getElementById('taxRate').value;
    console.log(`Calculating tax for amount: ${amount} with tax rate: ${taxRate}`);

    if (!window.myContract) {
        console.error('Contract not initialized');
        return;
    }

    try {
        await window.myContract.methods.calculateTax(amount, taxRate).send({ from: window.account });
        console.log('Tax calculation performed successfully');
        updateTaxAmount();
    } catch (error) {
        console.error('Error performing tax calculation:', error);
    }
}

async function updateTaxAmount() {
    try {
        const taxAmount = await window.myContract.methods.getTaxAmount().call();
        console.log('Tax Amount:', taxAmount);
        document.getElementById('taxAmount').innerText = taxAmount;
    } catch (error) {
        console.error('Error getting tax amount:', error);
    }
}

window.addEventListener('load', load);
