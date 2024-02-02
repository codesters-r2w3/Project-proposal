'use client'
import NFT from '../abi/nft.json';
import React, { useState, useContext , useEffect } from 'react';
//import { useStateContext } from '../context/eventContext'; // Import the context
 // Import Ethers.js
import { Contract, BrowserProvider } from "ethers";
const EventCreationForm = () => {
   // const { createEvent, status, setAddress, setStatus , address , addPerson} = useStateContext();
    const [eventName, setEventName] = useState("");
    const [eventVenue, setEventVenue] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();
    const[duration,setDuration] = useState();
    const [ticketPrice, setTicketPrice] = useState();
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [totalSupply, setTotalSupply] = useState();
    const NFT_CONTRACT_ADDRESS = "0x0df9139fdd2ef39d923878b2342fd52eeecc92d2";
    const [isWalletInstalled, setIsWalletInstalled] = useState(false);
    const [NFTContract, setNFTContract] = useState(null);
   
    const [account, setAccount] = useState(null);
    useEffect(() => {
        if (window.ethereum) {
          setIsWalletInstalled(true);
        }
      }, []);
      async function connectWallet() {
        window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((accounts) => {
            setAccount(accounts[0]);
          })
          .catch((error) => {
            alert("Something went wrong");
          });
      }
    useEffect(() => {
      function initNFTContract() {
        const provider = new BrowserProvider(window.ethereum);
        provider.getSigner().then((signer) => {
          setNFTContract(new Contract(NFT_CONTRACT_ADDRESS, NFT.abi, signer));
          console.log("NFT contract successfully initialized");
        }).catch((error) => {
          console.error("Error initializing contract:", error);
        });
      }
      initNFTContract();
    }, []);

    // useEffect(() => {
    //     function initNFTContract() {
    //       const provider = new BrowserProvider(window.ethereum);
    //       provider.getSigner().then((signer) => {
    //        // setNFTContract(new Contract(NFT_CONTRACT_ADDRESS, NFT.abi, signer));
    //         console.log("NFT contract successfully initialized");
    //       }).catch((error) => {
    //         console.error("Error initializing contract:", error);
    //       });
    //     }
    //     initNFTContract();
    //   }, []);
    async function mintNFT() {
    setIsMinting(true);
    try {
      const transaction = await NFTContract.mintNFT(account, zodiacSign);
  
      // Wait for the transaction to be confirmed
      await transaction.wait();
  
      // Transaction is confirmed, you can perform any additional actions here if needed
    } catch (e) {
      console.error(e);
    } finally {
      alert("Minting Successful")
      setIsMinting(false);
    }
  }
    const handleClick = async () => {
        try {
            
            // console.log(account);
            // const transaction = await NFTContract.addBuyer("0xe7c32977a0f45339745b9a64739917365093a283",'asdf',1);
        
            // // Wait for the transaction to be confirmed
            // await transaction.wait();
            // console.log(transaction);
            const totalSupplyValue = parseInt(totalSupply); // Parse as needed, this assumes it's a number
            const ticketPriceValue = parseInt(ticketPrice); // Parse as needed, this assumes it's a number
            const durationValue = parseInt(duration);
            console.log("Total Supply Value:", totalSupplyValue); // Log the parsed value
            console.log("Ticket Price Value:", ticketPriceValue); 
            console.log("Event Name:", eventName);
            console.log("Event Venue:", eventVenue);
            console.log("Description:", description);
            console.log("Duration:", durationValue);
            console.log("Creator Address:", account); // Replace with actual value or collect from a form field
            console.log("Image 1 URL:", img1);
            console.log("Image 2 URL:", img2);
            console.log("Total Supply:", totalSupplyValue); // Pass the collected value
            console.log("Ticket Price:", ticketPrice);
        
             // Parse as needed, this assumes it's a number

            // Call the createEvent function with the collected values
            const eventIdForCreateEvent = await NFTContract.createEvent(
              eventName,
              eventVenue,
              description,
              1738504035,
              durationValue,
              account, // Replace with actual value or collect from a form field
              img1,
              img2,
              totalSupplyValue, // Pass the collected value
              ticketPriceValue
            );
                await eventIdForCreateEvent.wait();
            console.log(`Event created with ID: ${eventIdForCreateEvent}`);
      
            // Transaction is confirmed, you can perform any additional actions here if needed
          } catch (e) {
            console.error(e);
          } finally {
            alert("Minting Successful")
           // setIsMinting(false);
          }
    //     setIsLoading(true);
    
    //     try {
    //       // Assuming you have a provider and wallet set up in ExampleContext
    //     //   const provider = new providers.Web3Provider(window.ethereum);

    //     //   const signer = provider.getSigner();
    //         debugger;
    //    const id=   await createEvent(
    //         eventName,
    //         description,
    //         date,
    //         ticketPrice,
    //         img1,
    //         img2,
    //         location,
    //         address, // Pass the signer's address
    //       );
    //     console.log(id);
    //       setStatus("Event created successfully");
    //     } catch (error) {
    //       console.error(error);
    //       setStatus("Error creating event");
    //     } finally {
    //       setIsLoading(false);
    //     }
      };

 
      return (
        <div className='m-8 flex justify-center items-center'>
             {isWalletInstalled ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <p>Install Metamask wallet</p>
        )}
          <div className='flex flex-col p-6 bg-gradient-to-r from-cyan-500 to-purple-500 w-1/2 rounded-md space-y-4'>

            <p className='text-center font-bold text-3xl mb-6 underline'>Create new event 🥳</p>
            <div className='flex flex-col lg:flex-row justify-between'>
              <InputBox label={"Event Name: "} type={"text"} onChange={(e) => setEventName(e?.target?.value)} />
              <div className='flex flex-col space-y-2 lg:ml-4'>
                <label className='font-semibold'>Description: </label>
                <textarea cols={35} rows={2} maxLength={150} className='focus:outline-none rounded-md p-2 border border-gray-300' onChange={(e) => setDescription(e?.target?.value)}></textarea>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
              <InputBox label={"Total Supply: "} type={"number"} onChange={(e) => setTotalSupply(e?.target?.value)} />
              <InputBox label={"Event Venue: "} type={"text"} onChange={(e) => setEventVenue(e?.target?.value)} />
              <InputBox label={"Duration: "} type={"text"} onChange={(e) => setDuration(e?.target?.value)} />
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
              <InputBox label={"Date: "} type={"date"} onChange={(e) => setDate(e?.target?.value)} />
              <InputBox label={"Ticket Price: "} type={"number"} onChange={(e) => setTicketPrice(e?.target?.value)} />
              <InputBox label={"Location: "} type={"text"} onChange={(e) => setLocation(e?.target?.value)} />
            </div>
            <div className='flex flex-col lg:flex-row justify-between'>
              <InputBox label={"Image 1 URL: "} type={"text"} onChange={(e) => setImg1(e?.target?.value)} />
              <InputBox label={"Image 2 URL: "} type={"text"} onChange={(e) => setImg2(e?.target?.value)} />
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                onClick={handleClick}
                className='shadow-xl bg-white text-black rounded-lg p-3 font-semibold hover:bg-gradient-to-r from-gray-900 to-purple-700 hover:text-white'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    const InputBox = ({ label, type, onChange }) => {
      return (
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>{label}</label>
          <input
            required
            type={type}
            className='focus:outline-none rounded-md p-2 border border-gray-300'
            onChange={onChange}
          />
        </div>
      );
    };
    

export default EventCreationForm