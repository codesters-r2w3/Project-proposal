'use client'

import React, { useState } from 'react'

const EventCreationForm = () => {

    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();
    const [ticketPrice, setTicketPrice] = useState();
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleClick() {
        // logic for event form submission
    }

  return (
    <div className='m-8  flex justify-center items-center'>
        <div className='flex flex-col p-6 bg-gradient-to-r from-cyan-500 to-purple-500 w-1/2 rounded-md space-y-2'>
            <p className='text-center font-bold text-xl md:text-3xl mb-10'><span className='underline'>Create new event</span> 🥳</p>
            <div className='flex flex-col xl:flex-row justify-between'>
                <InputBox label={"Event Name: "} type={"text"} className={""} onChange={(e) => setEventName(e?.target?.value)} />
                <div className='flex flex-col space-y-2'>
                    <label className='font-semibold'>Description: </label>
                    <textarea cols={35} rows={2} maxLength={150} className='focus:outline-none rounded-md p-2 border border-gray-300'></textarea>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row justify-between items-start xl:items-center'>
                <InputBox label={"Date: "} type={"date"} className={""} onChange={(e) => setDate(e?.target?.value)} />
                <InputBox label={"Ticket Price: "} type={"number"} className={""} onChange={(e) => setDate(e?.target?.value)} />
                <InputBox label={"Location: "} type={"text"} className={""} onChange={(e) => setLocation(e?.target?.value)} />
            </div>
            <div></div>
            <InputBox label={"Image 1 URL: "} type={"text"} className={""} onChange={(e) => setImg1(e?.target?.value)} />
            <InputBox label={"Image 2 URL: "} type={"text"} className={""} onChange={(e) => setImg2(e?.target?.value)} />
            <div className='flex justify-center'>
                <button type='submit' onClick={handleClick} className='shadow-xl bg-white text-black rounded-lg p-3 font-semibold hover:bg-gradient-to-r from-gray-900 to-purple-700 hover:text-white'>Submit</button> 
            </div>
        </div>
    </div>
  )
}

const InputBox = ({label, type, className, onChange}) => {
    return (
        <div className='flex flex-col space-y-2'>
            <label className='font-semibold'>{label}</label>
            <input
                required
                type={type}
                className={`${className} focus:outline-none rounded-md p-2 border border-gray-300`} 
                onChange={onChange}
            />
        </div>
    )
}

export default EventCreationForm
