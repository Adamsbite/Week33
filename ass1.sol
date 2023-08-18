// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract school{
    struct student { // struct name is student
        string name;
        uint age;
        string class;
    }
    mapping(address => student) public stool; // mapping name is stool

function studentinFunc(address add) public  {
    student storage _studentInfo = stool[add];
    _studentInfo.name = "byte";
    _studentInfo.age = 33;
    _studentInfo.class = "ss3";
}

function mystudent(string memory _name, uint _age, string memory _class, address add) public{
    student storage _studentInfo = stool[add];
    _studentInfo.name = _name;
    _studentInfo.age = _age;
    _studentInfo.class = _class;
}
}
