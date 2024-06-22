import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SellIcon from '@mui/icons-material/Sell';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import '../styles/AboutSection.css';

function AboutSection() {
  return (
    <div className="about-section">
      <div className="section-card">
        <p className="section-title">Have a house to rent as a boarding?</p>
        <p className="section-text">
          Don't worry, we got you covered. <br />
          Let's find a boarder for your house easily.
        </p>
        <IconLabelButtons icon={<SellIcon />} text="Post your ad" />
      </div>
      <div className="section-card">
        <p className="section-title">Want to find a boarding house?</p>
        <p className="section-text">
          Don't worry, we got you covered. <br />
          Let's find a suitable boarding for your budget.
        </p>
        <IconLabelButtons icon={<LocalMallIcon />} text="Find a Boarding" />
      </div>
    </div>
  );
}

export default AboutSection;

export function IconLabelButtons({ icon, text }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary" startIcon={icon}>
        {text}
      </Button>
    </Stack>
  );
}
