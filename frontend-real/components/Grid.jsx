'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {useEffect , useState} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from './Card';
import { Contract, BrowserProvider } from "ethers";
import { eventsData} from '../constants';
import NFT from '../abi/nft.json';
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  const NFT_CONTRACT_ADDRESS = "0xe7c32977a0f45339745b9a64739917365093a283";
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [NFTContract, setNFTContract] = useState(null);
 
  const [account, setAccount] = useState(null);
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

  return (
    

    
    <div className="flex x-auto content-center ">
      <Box className="content-normal mx-auto" sx={{ width: '80%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 5, sm: 5, md: 8 }}>
          {eventsData.map((e)=>{
           
            return(
              <Grid className="border-[#1a232e] bottom-0" item xs={3} >
              <Item >
                <Card 
                key={e.id}
                id = {e.id}
                description={e.description}
                imagUrl2= {e.image2Url}
                location = {e.location}
                organizer = {e.organizerName}
                name2={e.eventName } imageUrl1 ={ e.image1Url}/>
              </Item>
            </Grid>
            )
          })}
         
         
        </Grid>
      </Box>
    </div>
  );
}
