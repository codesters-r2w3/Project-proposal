// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Nft {
    
    struct Event{
        string eventName;
        string evntVenue;
        uint256 Time;
        uint256 Duration;
        string createrName;
        address creatorAddress;
    }

    struct Person{
        string Name;
        bytes1 Gender;
        uint256 Age;
    }
    Event public myEvent;
    function createEvent(
        string calldata _eventName,
    string calldata _evntVenue,
    uint256 _Time,
    uint256 _Duration,
    address _creatorAddress
    ) public
    {
        myEvent.eventName = _eventName;
        myEvent.evntVenue = _evntVenue;
        
    }
}