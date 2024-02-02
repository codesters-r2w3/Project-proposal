// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
contract Nft is Ownable, ERC721URIStorage {
    constructor() ERC721("Nft", "NFT") Ownable(msg.sender) {
}
    using Strings for uint256;

    uint256 public tokenId = 1;
    uint256 private currentTime = block.timestamp;
    struct Buyer{
        address buyerAddress;
        string [] metaDatas;
        uint256[] eventIds;

    }
    uint256 public buyerCount =0;
    
    mapping(address=>Buyer) public buyers;
    function addBuyer(address _buyerAddress , string memory _metaData, uint256 _eventId) public returns (uint256){
          if (buyers[_buyerAddress].buyerAddress == address(0)) {
            // If the buyer does not exist, create a new entry
            Buyer storage newBuyer = buyers[_buyerAddress];
            newBuyer.buyerAddress = _buyerAddress;
            buyerCount++;
        }

        // Append metadata and eventId to the buyer's data
        buyers[_buyerAddress].metaDatas.push(_metaData);
        buyers[_buyerAddress].eventIds.push(_eventId);

        return buyers[_buyerAddress].eventIds.length - 1;
    }
    function getBuyerDetails(address _buyerAddress) public view returns (Buyer memory) {
    require(buyers[_buyerAddress].buyerAddress != address(0), "Buyer does not exist");
    return buyers[_buyerAddress];
}

    struct Event {
        string eventName;
        string eventVenue;
        uint256 Time;
        uint256 Duration;
        address creatorAddress;
        string imgUrl1;
        string imgUrl2;
        string eventDescription;
        uint256 totalSupply;
        uint256 ticketPrice;
    }

    mapping(uint256 => Event) public events; // creation of dynamic array
    uint256 public eventCount = 0;

    function createEvent(
        string memory _eventName,
        string memory _eventVenue,
        string memory _eventDescription,
        uint256 _Time,
        uint256 _Duration,
        address _creatorAddress,
        string memory _imgUrl1,
        string memory _imgUrl2,
        uint256 _totalSupply,
        uint256 _ticketPrice
    ) public returns (uint256)
    {
        require(_Time > block.timestamp, "event time must be in the future");
        Event storage myEvent = events[eventCount];
        myEvent.eventName = _eventName;
        myEvent.eventVenue = _eventVenue;
        myEvent.Duration = _Duration;
        myEvent.eventDescription = _eventDescription;
        myEvent.creatorAddress = _creatorAddress;
        myEvent.imgUrl1 = _imgUrl1;
        myEvent.imgUrl2 = _imgUrl2;
        myEvent.Time = _Time + currentTime;
        myEvent.totalSupply = _totalSupply;
        myEvent.ticketPrice = _ticketPrice;

        //pushing the event details to the array
        eventCount++;
        return eventCount - 1;
    }


     receive() external payable {}
    fallback() external payable {}
function mintNFT(uint256 _eventId, address _buyerAddress, string memory _metadataUrl) public payable {
    // Check if the event exists
    require(_eventId < eventCount, "Invalid event ID");

    // Check if the buyer exists, and add them if they don't
    if (buyers[_buyerAddress].buyerAddress == address(0)) {
        buyers[_buyerAddress].buyerAddress = _buyerAddress;
        buyerCount++;
    }

    // Check if there are available tickets for the event
    require(events[_eventId].totalSupply > 0, "No available tickets");

    // Check if the buyer has enough funds to purchase the ticket
    uint256 ticketPrice = events[_eventId].ticketPrice;
    console.log(msg.value);
    console.log(ticketPrice);
    require(msg.value >= ticketPrice, "Insufficient funds");

    // Mint the NFT to the buyer's address
    uint256 newItemId = tokenId;
    _mint(_buyerAddress, newItemId);

    // Set the token URI for the NFT
    _setTokenURI(newItemId, _metadataUrl);

    // Update buyer's data
    buyers[_buyerAddress].metaDatas.push(_metadataUrl);
    buyers[_buyerAddress].eventIds.push(_eventId);

    // Reduce the totalSupply of the event
    events[_eventId].totalSupply--;

    // Send the ticketPrice to the creatorAddress
    payable(events[_eventId].creatorAddress).transfer(ticketPrice);

    // Refund excess funds to the buyer
    if (msg.value > ticketPrice) {
        payable(_buyerAddress).transfer(msg.value - ticketPrice);
    }
     console.log(
            "The NFT ID %s has been minted to %s",
            newItemId,
            msg.sender
        );
    tokenId++;
}


}
