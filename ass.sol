// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract school {
    struct student {
        string name;
        string class;
        uint  age;
    }
    mapping(address => student) public studio; 
    function setInfo () public {
    studio[msg.sender] = student("bite", "ss2", 11);

    }
}
