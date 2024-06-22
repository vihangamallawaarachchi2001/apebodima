import React from 'react';
import Button from '@mui/material/Button';
import '../styles/ContactUsSection.css';

function ContactUsSection() {
  return (
    <div className="contact-us-section">
      <h2>Have a Problem?</h2>
      <p>Contact us and we'll get back to you as soon as possible.</p>
      <DisableElevation text="contact us" />
    </div>
  );
}

export default ContactUsSection;

export  function DisableElevation({text}) {
    return (
      <Button variant="contained" disableElevation  color="primary">
        {text}
      </Button>
    );
  }