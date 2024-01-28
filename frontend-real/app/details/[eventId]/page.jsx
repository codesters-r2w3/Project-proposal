'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { BiUpvote } from "react-icons/bi";
import Image from "next/image";
import img1 from '../../../public/event1.jpg'
const CampaignDetails = () => {
  const router = useRouter();
  const {
    name,
    description,
    location,
    owner,
    image,
    pId,
  } = router.query;

  const state = {
    title: title || 'Default Title',
    description: description || 'Default Description',
    location: location || 'Default Location',
    owner: owner || 'Default Owner',
    image: image || '', // You may need to adjust this based on how you pass the image URL.
    pId: pId || 'Default ID',
  };
  const date = new Date();
  const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;

  const handleupVoteCall = async (id) => {
    setIsLoading(true);
    // Simulating upVote functionality
    console.log(`UpVote called for ID: ${id}`);
    setIsLoading(false);
  };

  const handleDonate = async () => {
    setIsLoading(true);
    // Simulating donation functionality
    console.log(`Donation of ${amount} ETH received`);
    setIsLoading(false);
  };

  return (
    <>
      <div>
        {isLoading && <p>Loading...</p>}
        <div className="overflow-x-hidden" style={{ marginTop: -100, zIndex: -1 }}>
          <div className="bg-white mt-16">
            <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                <div className="lg:row-end-1 lg:col-span-4">
                  {state?.title &&
                    <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src={state?.image}
                        alt={state?.title}
                        className="object-center object-cover w-full"
                      />
                    </div>}
                </div>
                <div className="max-w-2xl mx-auto mt-14 sm: lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                  <div className="flex flex-col-reverse">
                    <div className="">
                      <h1 className="text-2xl font-extrabold tracking-tight mb-2 text-gray-900 sm:text-3xl">
                        {state?.title ? state?.title : ""}
                      </h1>
                    </div>
                  </div>
                  {<div className="my-2 flex-col sm:flex-row flex sm:flex-none  items-start font-bold text-gray-900 text-xl  sm:items-center ">
                    <div className="sm:mb-0 mx-1 mb-2">Event time </div>
                    <div className="">{formattedDate}</div>
                  </div>}
                  {state?.location && <div className="my-2 flex-col sm:flex-row flex sm:flex-none  items-start font-bold text-gray-900 text-xl  sm:items-center ">
                    <div className="sm:mb-0 mx-1 mb-2">
                      <IoLocationSharp className=" mr-1 " />
                    </div>
                    <div className="">{` ${state?.location}`}</div>
                  </div>}
                  {state?.description && <div className="text-gray-500 font-medium text-base mt-6">
                    {state?.description}
                  </div>}
                  <div className="mt-3 flex">
                    <p className='font-extrabold font-epilogue py-3 text-lg text-sky-700 '>Make an upvote to support the reporter</p>
                    <button
                      onClick={() => { handleupVoteCall(state?.pId); }}
                      type="button"
                      className="w-[3px] flex-1 ml-4 text-white border border-transparent rounded-md py-3 px-2 flex items-center justify-center text-base font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-sky-400  bg-sky-500    hover:bg-sky-400"
                    >
                      <BiUpvote size={30} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className='mt-4  w-[700px] bg-gray-100 rounded-xl	 prose prose-sm text-gray-900'>
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
                  <p className="font-epilogue font-extrabold text-[20px] leading-[30px] text-center text-blue-900">
                    Donate for this platform
                  </p>
                  <div className="mt-[30px]">
                    <input
                      min={0.01}
                      type="number"
                      placeholder="ETH 0.1"
                      step="0.01"
                      className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-sky-900 text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <div className="my-[20px] p-4  bg-sky-100 rounded-[10px]">
                      <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-blue-900">Back it because you believe in it.</h4>
                      <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-blue-900">Support the project for no reward, just because it speaks to you.</p>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-sky-500 py-3 text-white font-epilogue font-semibold rounded-[10px] hover:bg-sky-400 focus:outline-none focus:ring focus:border-sky-300"
                      onClick={handleDonate}
                    >
                      Support this platform
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignDetails;
