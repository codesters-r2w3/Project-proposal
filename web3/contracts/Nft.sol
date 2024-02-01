// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";



contract Nft is ERC721,Ownable {

    constructor(address initialOwner) ERC721("Nft", "NFT") Ownable(initialOwner) {}

    using Strings for uint256;    
    uint256 currentTime = block.timestamp;

    struct Event{
        string eventName;
        string eventVenue;
        uint256 Time;
        uint256 Duration;
        string creatorName;
        address creatorAddress;
        string imgUrl;
        uint256 totalSupply;
    }

    Event[] public events; // creation of dynamic array tostore the events
    mapping (address => mapping(uint256 => Event)) personToEvents;
    uint256 nextEventId = 1;
    uint256 tokenId = 1;
        
    function createEvent(
        string calldata _eventName,
        string calldata _eventVenue,
        uint256 _Time,
        uint256 _Duration,
        string calldata _creatorName,
        string memory _imgUrl,
        uint256 _totalSupply
    ) 
    public 
    {
        require(block.timestamp > _Time, "event time must be in future");
        events.push(Event({
        eventName: _eventName,
        eventVenue: _eventVenue,
        Time: _Time,
        Duration: _Duration,
        creatorName: _creatorName,
        creatorAddress: msg.sender,
        imgUrl: _imgUrl,
        totalSupply: _totalSupply
        }));
    }

    function getEvent() public view returns (Event[] memory) {
        return events;
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

    //defining the structure of the person 
    enum gender {M,F}
    struct Person{
        string Name;
        gender Gender;
        uint256 Age;
        address Address;
    }

    Person public myPerson;

    function register(string calldata _name,gender _gen,uint256 _age, address _address) external  {
        // initializing the parameters
        myPerson.Name = _name;
        myPerson.Gender = _gen;
        myPerson.Age = _age;
        myPerson.Address = _address;
    }

    function selectEvent(uint256 eventId) public {
        require(eventId > 0 && eventId < nextEventId,"Invalid event ID");
        Event storage selectedEvent = events[eventId - 1];
        require(selectedEvent.Time > block.timestamp, "Event has already started");
        require(selectedEvent.totalSupply > 0,"no available tickets");
        selectedEvent.totalSupply--;

        _safeMint(msg.sender, tokenId);
        personToEvents[msg.sender][eventId] = selectedEvent;
        tokenId++;

        require(currentTime > selectedEvent.Time,"event already started");
        _burn(tokenId);
        }
}