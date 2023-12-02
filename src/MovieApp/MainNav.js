import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Whatshot from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SimpleBottomNavigation( {setsearch}) {
  const [value, setValue] = React.useState(0);

  const navi= useNavigate();


  function handleClick(){
    if(value===0){navi("/trending")
} else if(value===2){
   navi("./tv")
} else if(value===3){
  navi("./movies")
}
    
   
  }

    useEffect(()=>{
      handleClick()
    },[value])

  return (
    <Box className="font-extrabold text-2xl"   sx={{ width:"100%",position:"fixed",bottom:"0",backgroundColor:'black !important',color:"black" }}>
      <BottomNavigation className='shadow-md' style={{backgroundColor:"black",height:"60px",boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setsearch("")
        }}
      >
        <BottomNavigationAction  style={{color:"white"}} label="Trending" icon={<Whatshot />} />
        <BottomNavigationAction onClick={()=>window.scroll(0,0)} style={{color:"white"}} label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="Movie" icon={<MovieIcon />} />
      </BottomNavigation>
    </Box>
  );
}