import React from "react";
import '../cssUser/starHotel.css';

const Footer = () => {
  return (
      <footer className="starhotel-footer">
        <div className="starhotel-footer-container">
          <nav className="starhotel-footer-nav">
            <div>
              <h3>Star Hotels</h3>
              <p>Hospitality and Comfort are our watchwords</p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>23, Fola Osibo, Lekki Phase 1</p>
              <p>08185956620</p>
              <p>support@starhotels.com</p>
            </div>
            <div>
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
  );
};

export default Footer;
