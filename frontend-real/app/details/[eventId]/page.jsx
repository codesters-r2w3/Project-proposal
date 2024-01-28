'use client'
import { useState, useEffect } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { BiUpvote } from 'react-icons/bi';
import Image from 'next/image';
import img from '../../../public/event1.jpg';
import { useStateContext } from '../../../context/eventContext.js';
import QRCode from 'react-qr-code';

const EventDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [userName, setUserName] = useState('');

  const { exampleProps } = useStateContext();
  const { name1, imageUrl, imageUrl2, id, description, location, organizer } = exampleProps;
  const state = {
    title: name1,
    description: description,
    location: location,
    owner: organizer,
    image1: imageUrl,
    image2: imageUrl2,
    pId: id,
  };

  const date = new Date();
  const formattedDate = `${date.getDate()} ${date.toLocaleString('default', {
    month: 'short',
  })} ${date.getFullYear()}`;

  const handleupVoteCall = async (id) => {
    setIsLoading(true);
    // Simulating upVote functionality
    console.log(`UpVote called for ID: ${id}`);
    setIsLoading(false);
  };

  const handleDonate = async () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setUserName('');
  };

  const handleGenerateQRCode = () => {
    // Generate QR code based on the user's name
    // You can use any QR code generation logic or library here
    // For this example, I'll use a simple string concatenation
    const qrCodeData = `User: ${userName}`;
    return <QRCode value={qrCodeData} />;
  };

  const handleClickOutside = (event) => {
    if (event.target === document.querySelector('.bg-black.bg-opacity-50')) {
      setIsFormVisible(false);
      setUserName('');
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div>
        {isLoading && <p>Loading...</p>}
        <div className="overflow-x-hidden" style={{ marginTop: -100, zIndex: -1 }}>
          <div className="bg-white mt-16">
            <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                <div className="lg:row-end-1 lg:col-span-4">
                  <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                    <Image
                      src={img}
                      alt={state?.title}
                      className="object-center object-cover w-full"
                    />
                  </div>
                </div>
                <div className="max-w-2xl mx-auto mt-14 sm: lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                  <div className="flex flex-col-reverse">
                    <div className="">
                      <h1 className="text-2xl font-extrabold tracking-tight mb-2 text-gray-900 sm:text-3xl">
                        {/* {state?.title ? state?.title : ''} */}
                      </h1>
                    </div>
                  </div>
                  <div className="my-2 flex-col sm:flex-row flex sm:flex-none  items-start font-bold text-gray-900 text-xl  sm:items-center ">
                    <div className="sm:mb-0 mx-1 mb-2">Event time </div>
                    <div className="">{formattedDate}</div>
                  </div>
                  <div className="my-2 flex-col sm:flex-row flex sm:flex-none  items-start font-bold text-gray-900 text-xl  sm:items-center ">
                    <div className="sm:mb-0 mx-1 mb-2">
                      <IoLocationSharp className=" mr-1 " />
                    </div>
                    <div className="">{` ${state?.location}`}</div>
                  </div>
                  <div className="text-gray-500 font-medium text-base mt-6">
                    {state?.description}
                  </div>
                  <div className="mt-3 flex">
                    
                  </div>
                </div>
              </div>
              <div className="">
                <div className="mt-4  w-[700px] bg-gray-100 rounded-xl prose prose-sm text-gray-900">
                  <div className="max-w-sm p-3 sm:flex  sm:space-x-6  ">
                    <div className="sm:flex-shrink-0 mx-auto sm:mx-0  mb-6 h-10   sm:mb-0">
                      {/* Sample Profile Image */}
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div>
                        <h2 className="text-2xl w-96 font-semibold">{state?.owner}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="mt-[20px] flex flex-col p-4 bg-sky-100 rounded-[10px]">
                  <p className="font-epilogue font-extrabold text-[28px] leading-[30px] text-center text-blue-900">
                    Event Booking
                  </p>
                  <div className="mt-[30px]">
                    <div className="my-[20px] p-4  bg-sky-100 rounded-[10px]">
                      <h4 className="font-epilogue font-semibold text-[24px] leading-[22px] text-blue-900">
                        Buy your tickets and claim it as NFT
                      </h4>
                      <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-blue-900">
                        How cool's that 😎
                      </p>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-sky-500 py-3 text-white font-epilogue font-semibold rounded-[10px] hover:bg-sky-400 focus:outline-none focus:ring focus:border-sky-300"
                      onClick={handleDonate}
                    >
                      Book your tickets
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up form */}
      {isFormVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            {/* Form content */}
            <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
            <form>
              {/* Form fields go here */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <button
                type="button"
                className="bg-sky-500 text-white p-2 rounded-md hover:bg-sky-400"
                onClick={handleCloseForm}
              >
                Pay with Crypto
              </button>
            </form>
            <div className="flex flex-col pt-4">
              <p1>Your QR (NFT) 👇</p1>
            {userName && handleGenerateQRCode()}
            </div>
            {/* Display QR Code */}
            
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetails;
