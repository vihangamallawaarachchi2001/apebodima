import React from 'react';
import '../styles/FooterSection.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Ape Bodima</h3>
          <p>Ape Bodima is a part of <br />AxionFlow.com. We help students <br /> and young professionals find <br /> their perfect boarding houses.</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@axionflow.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="footer-social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><XIcon /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/listings">Listings</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe for News</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ape Bodima. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
