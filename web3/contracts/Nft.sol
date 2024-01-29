// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract Nft is ERC721,Ownable,ERC721URIStorage {
    using Strings for uint256;

    uint256 private tokenId = 1;
    
    uint256 currentTime = block.timestamp;

    struct Event{
        string eventName;
        string eventVenue;
        uint256 Time;
        uint256 Duration;
        string createrName;
        address creatorAddress;
        string imgUrl;
        uint256 totalSupply;
    }
    Event[] public events; // creation of dynamic array
    mapping (string => uint256) eventToIndex;
    mapping (address => uint) eventAttendee;
    
    Event public myEvent; // creating an instance for this event struct
    
    function createEvent(
        string calldata _eventName,
        string calldata _evntVenue,
        uint256 _Time,
        uint256 _Duration,
        address _creatorAddress,
        string memory _imgUrl,
        uint256 _totalSupply
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
        myEvent.totalSupply = _totalSupply;

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

    function selectEvent(string calldata _eventName, address _address) public  {
        uint256 index = eventToIndex[_eventName];
        require(index < events.length,"invalid event name");
        require(events[index].totalSupply > 0,"no available tickets");
        events[index].totalSupply--;

        _safeMint(msg.sender, tokenId);
        eventAttendee[tokenId] = msg.sender; // Track the attendee for the NFT
        _setTokenURI(tokenId, events[index].imgUrl); // Set the token URI to the image URL
        tokenId++;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    return events[tokenId].imgUrl;
    }

}