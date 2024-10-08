import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-pink-50 p-6 mt-5 text-gray-800">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold">QUICK LINKS</h3>
          <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/news' >News</Link></li>
            <li><Link to='/conatct' >Contact</Link></li>
            
          </ul>
        </div>

        {/* Policies */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold">POLICIES</h3>
          <ul>
            <li>Buyer's Policy</li>
            <li>Partner Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Locate Us */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold">LOCATE US</h3>
          <p>Our Courier Address.</p>
          <p>Mr. Bikshpati Kolaan.</p>
          <p>M/s. Go Sujathaa Handlooms.</p>
          <p>9-11, Vellanky - 508113.</p>
          <p>Mandal: Ramannapeta.</p>
          <p>Dist: Yadadri Bhuvanagiri.</p>
          <p>Telangana.</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className="text-gray-800 hover:text-gray-600" />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="text-gray-800 hover:text-gray-600" />
            </Link>
            <Link href="https://www.instagram.com/go.sujathaa.handlooms?igsh=MTN5cXI3bzlxc3hvZg%3D%3D&utm_source=qr" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-gray-800 hover:text-gray-600" />
            </Link>
            
           
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold">NEWSLETTER</h3>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 mt-4 rounded hover:bg-gray-800"
          >
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-center mt-6 text-sm">© Go Sujathaa Handlooms - Handloom & Handicraft</p>
    </footer>
  );
};

export default Footer;
