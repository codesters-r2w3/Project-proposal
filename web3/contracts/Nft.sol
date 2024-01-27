// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Nft {
    
    uint256 currentTime = block.timestamp;
    struct Event{
        string eventName;
        string evntVenue;
        uint256 Time;
        uint256 Duration;
        string createrName;
        address creatorAddress;
        string imgUrl;
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
        address _creatorAddress,
        string memory _imgUrl
    ) 
    public returns (uint)
    {
        myEvent.eventName = _eventName;
        myEvent.evntVenue = _evntVenue;
        myEvent.Duration = _Duration;
        myEvent.creatorAddress = _creatorAddress;
        myEvent.imgUrl = _imgUrl;

        if (_Time < currentTime){
            return 0;
        }
        else {
            myEvent.Time = _Time + currentTime;
        }
    }
}