import React, { useState } from 'react'
import {ethers} from "ethers";
import { useStateContext } from '@/context/eventContext';

const WalletConnect = () => {

    const {status, setStatus, address, setAddress} = useStateContext();

    async function handleClick() {
        let signer = null;
        let provider;

        if (!window.ethereum) {
            alert("Install metamask/ other Web3 wallets");
        } else {
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();   
            setStatus("Connected");
            setAddress(signer.address);
        }
    }

  return (
    <div>
        <button className="bg-white rounded-lg p-3" onClick={handleClick}>
            {status}
        </button>
    </div>
  )
}

export default WalletConnect
