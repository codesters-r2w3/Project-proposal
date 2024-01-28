// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Nft {
    
    uint256 currentTime = block.timestamp;
    struct Event{
        string eventName;
        string eventVenue;
        uint256 Time;
        uint256 Duration;
        string createrName;
        address creatorAddress;
        string imgUrl;
    }
    Event[] public events; // creation of dynamic array
    struct Person{
        string Name;
        bytes1 Gender;
        uint256 Age;
    }
    
    Event public myEvent; // creating an instance for this event struct
    
    function createEvent(
        string calldata _eventName,
        string calldata _evntVenue,
        uint256 _Time,
        uint256 _Duration,
        address _creatorAddress,
        string memory _imgUrl
    ) 
    public 
    {
        require(_Time > block.timestamp,"event time must be in future");

        myEvent.eventName = _eventName;
        myEvent.eventVenue = _evntVenue;
        myEvent.Duration = _Duration;
        myEvent.creatorAddress = _creatorAddress;
        myEvent.imgUrl = _imgUrl;
        myEvent.Time = _Time + currentTime;

        //pushing the event details to the array
        Event memory newEvent;
        newEvent = myEvent;
        events.push(newEvent);
    }


    function endEvents() private  {
        uint256 i = 0;
        while (i < events.length) {
            if (events[i].Time + events[i].Duration < block.timestamp) {
                if (i < events.length - 1) {
                    events[i] = events[events.length - 1];
                }
                events.pop();
            } else {
                i++;
            }
        }
    }
}