import React from 'react'
import '../styles/WelcomeBanner.css'

function WelcomeBanner() {

    
  return (
    <div className='WelcomeBanner'>
        <div className="left">
            <h1 className='Welcome-text'>Ape Bodima</h1>
            <p className='tagline'>Find Your Home Away from Home</p>
            <div>
            <input type="search" name="search" id="search" placeholder='search'/>
            <SelectLabels />
            </div>
        </div>
        <dvi className="right">
            <img src="/Welcome.png" alt="Ape Bodima" />
        </dvi>
    </div>
  )
}

export default WelcomeBanner

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export  function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Malabe</MenuItem>
          <MenuItem value={20}>Athurugiriya</MenuItem>
          <MenuItem value={30}>Kaduwela</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">Accomadation</InputLabel>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <em>None</em>
          <MenuItem value={10}>Single Room</MenuItem>
          <MenuItem value={20}>Shared Room</MenuItem>
          <MenuItem value={30}>Hostel Type</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}