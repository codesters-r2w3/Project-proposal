'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from './Card';
import { eventsData} from '../constants';
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {

  return (
    

    
    <div className="flex x-auto content-center ">
      <Box className="content-normal mx-auto" sx={{ width: '80%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 5, sm: 5, md: 8 }}>
          {eventsData.map((e)=>{
           
            return(
              <Grid className="border-[#1a232e] bottom-0" item xs={3} key={e.id}>
              <Item >
                <Card 
                key={e.id}
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
