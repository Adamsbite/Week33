// SPDX-License-Identifier: MIT
pragma solidity ^0.8; 
 
 contract PandV{


     uint num = 5;    // state variable

     function add() public view returns(uint){// references the state variable
         uint newNum = num + 5;
         return newNum;
     }


     function subtract() public pure returns(uint) { // doesn't refernce the state variable
         uint newNum = 5 + 5;
         return newNum;

     }
 }
