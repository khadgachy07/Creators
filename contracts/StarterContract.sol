// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract StarterContract{

    address owner;

    struct Person{
        uint age;
        string name;
        string contact_address;
    }

    bytes32[] public hashPerson;

    Person[] Creators;

    mapping(bytes32 => Person) public personsHash;

    mapping(string => Person) namePerson;

    constructor (){
        owner = msg.sender;
    }

    modifier onlyOwner{
        require( msg.sender == owner,"Caller must be owner");
        _;
    }

    modifier checkBalance{
        require( address(msg.sender).balance >= 0.005 ether,"Should have more than 500 eth" );
        _;
    }

    function addCreator(uint _age, string memory _name, string memory _contactAddress) public{
        Person memory person;

        person.age = _age;
        person.name = _name;
        person.contact_address = _contactAddress;

        Creators.push(person);

        bytes32 hash = getHash(_age,_name,_contactAddress);
        hashPerson.push(hash);
        personsHash[hash] = person;

        namePerson[_name] = person;
    }

    function getHash(uint _age, string memory _name, string memory _contactAddress) internal pure returns(bytes32) {
        return keccak256(abi.encode(_age, _name, _contactAddress));
    }

    function getCreators() public view returns(Person[] memory){
        return Creators;
    }

    function removePerson(uint index) public onlyOwner checkBalance{
        for(uint i = index; i < Creators.length -1; i++){
            Creators[i] = Creators[i+1];
        }
        Creators.pop();
        
        for (uint i = index; i < hashPerson.length - 1; i++){
            hashPerson[i] = hashPerson[i+1];
        }
        hashPerson.pop();
    }

    function getPerson(string memory _name) public view onlyOwner checkBalance returns(Person memory){
       return namePerson[_name];
    }


}