import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./MainNav.css";
import Whatshot from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="font-extrabold text-2xl"   sx={{ width:"100%",position:"fixed",bottom:"0",backgroundColor:'black !important',color:"black" }}>
      <BottomNavigation className='shadow-md' style={{backgroundColor:"black",height:"60px",boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  style={{color:"#f1f5f9"}} label="Trending" icon={<Whatshot />} />
        <BottomNavigationAction style={{color:"#f1f5f9"}} label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction style={{color:"#f1f5f9"}} label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color:"#f1f5f9"}} label="Movie" icon={<MovieIcon />} />
      </BottomNavigation>
    </Box>
  );
}