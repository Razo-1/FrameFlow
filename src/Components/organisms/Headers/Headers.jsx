import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import './Headers.css'

export default function Headers() {
  const [value, setValue] = React.useState('recents');
  let {isDay} = useSelector(state => state.nightMode)
  let {userId} = useSelector(state => state.auth)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
     <div className='header'>
        <BottomNavigation sx={{ width: 600,background : isDay ? 'rgb(0,0,0,0.3)' : 'rgb(255,255,255,0.3)',backdropFilter : 'blur(10px)'}}  value={value} onChange={handleChange}>
          <BottomNavigationAction
            component={NavLink}
            to={`/`}
            label="Recents"
            value="recents"
            sx={{
            "& .MuiSvgIcon-root": {
              color: isDay ? "white" : undefined,
            },
            "&.Mui-selected .MuiSvgIcon-root": {
              color: "primary.main",
            },}}
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to={`/search`}
            label="Search"
            value="search"
            sx={{
            "& .MuiSvgIcon-root": {
              color: isDay ? "white" : undefined,
            },
            "&.Mui-selected .MuiSvgIcon-root": {
              color: "primary.main",
            },}}
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to={`/`}
            label="Nearby"
            value="nearby"
            sx={{
            "& .MuiSvgIcon-root": {
              color: isDay ? "white" : undefined,
            },
            "&.Mui-selected .MuiSvgIcon-root": {
              color: "primary.main",
            },}}
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to={`/`}
            label="Folder"
            value="folder"
            sx={{
            "& .MuiSvgIcon-root": {
              color: isDay ? "white" : undefined,
            },
            "&.Mui-selected .MuiSvgIcon-root": {
              color: "primary.main",
            },}}
            icon={<FolderIcon />} />
            {userId ? '' : <BottomNavigationAction
            component={NavLink}
            to={`/sigup`}
            label="Profile"
            value="Profile"
            sx={{
            "& .MuiSvgIcon-root": {
              color: isDay ? "white" : undefined,
            },
            "&.Mui-selected .MuiSvgIcon-root": {
              color: "primary.main",
            },}}
            icon={<AccountCircleIcon />} />}
            
        </BottomNavigation>
     </div>
  );
}