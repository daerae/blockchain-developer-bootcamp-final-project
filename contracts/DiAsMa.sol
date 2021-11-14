// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DiAsMa {

  mapping (address => string) private links;

  function saveLink(string memory link) public {
    links[msg.sender] = link;
  }

  function getLink() public view returns (string memory) {
    return links[msg.sender];
  }
}
