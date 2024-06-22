import React from 'react';
import '../styles/WelcomeBanner.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function WelcomeBanner() {
  return (
    <div className='WelcomeBanner'>
      <div className="left">
        <h1 className='Welcome-text'>Ape Bodima</h1>
        <p className='tagline'>Find Your Home Away from Home</p>
        <div className='searchSection'>
          <input type="search" name="search" id="search" placeholder='Search' />
          <SelectLabels />
        </div>
      </div>
      <div className="right">
        <img src="/Welcome.png" alt="Ape Bodima" className="banner-image" />
      </div>
    </div>
  );
}

export function SelectLabels() {
  const [location, setLocation] = React.useState('');
  const [accommodation, setAccommodation] = React.useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleAccommodationChange = (event) => {
    setAccommodation(event.target.value);
  };

  return (
    <div className='selectors'>
      <FormControl sx={{ minWidth: 120, marginRight: 2 }}>
        <InputLabel id="location-select-label">Location</InputLabel>
        <Select
          labelId="location-select-label"
          id="location-select"
          value={location}
          label="Location"
          onChange={handleLocationChange}
          sx={{ bgcolor: '#ffffff' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Malabe</MenuItem>
          <MenuItem value={20}>Athurugiriya</MenuItem>
          <MenuItem value={30}>Kaduwela</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="accommodation-select-label">Accommodation</InputLabel>
        <Select
          labelId="accommodation-select-label"
          id="accommodation-select"
          value={accommodation}
          label="Accommodation"
          onChange={handleAccommodationChange}
          sx={{ bgcolor: '#ffffff' }}
        >
          <MenuItem value={10}>Single Room</MenuItem>
          <MenuItem value={20}>Shared Room</MenuItem>
          <MenuItem value={30}>Hostel Type</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default WelcomeBanner;
