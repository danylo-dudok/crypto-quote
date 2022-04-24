//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Quoter {
    string[] private quotes;

    constructor(string[] memory _quotes) {
        quotes = _quotes;
    }

    function getQuotes() public view returns (string[] memory) {
        return quotes;
    }

    function add(string memory _quote) public {
        quotes.push(_quote);
    }
}
