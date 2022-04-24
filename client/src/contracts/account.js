import { ethers } from "ethers";

export class Account {
  contract;

  constructor(contractAddress) {
    this.contractAddress = contractAddress;
    this.ABI = [
      {
        "inputs": [
          {
            "internalType": "string[]",
            "name": "_quotes",
            "type": "string[]"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_quote",
            "type": "string"
          }
        ],
        "name": "add",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getQuotes",
        "outputs": [
          {
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];
    this.provider = new ethers.providers.Web3Provider(window.ethereum)
    this.signer = this.provider.getSigner()
    this.contract = new ethers.Contract(this.contractAddress, this.ABI, this.signer);
  }

  async authorize() {
    await this.provider.send("eth_requestAccounts", []);
  }

  async getBalance() {
    const balance = await this.provider.getBalance(this.contractAddress);
    return ethers.utils.formatEther(balance);
  }
}
