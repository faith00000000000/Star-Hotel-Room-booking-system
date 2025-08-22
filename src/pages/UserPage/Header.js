import React from "react";
import '../cssUser/starHotel.css';

const Header = () => {
  return (
    <header className="starhotel-header">
      <div className="starhotel-header-container">
        <nav className="starhotel-header-nav-bar">
          <div className="starhotel-header-nav-logo">
            <a href="/">
              <img
                src="https://res.cloudinary.com/joshuafolorunsho/image/upload/v1591615159/star_hotels_logo.png"
                alt="star hotels logo"
              />
            </a>
          </div>

          <ul className="starhotel-header-nav-lists">
            <li>
              <a
                className="starhotel-header-nav-link starhotel-header-active"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a className="starhotel-header-nav-link" href="/roomsAndSuites">
                Rooms and Suites
              </a>
            </li>
            <li>
              <a className="starhotel-header-nav-link" href="/findBooking">
                Find my Booking
              </a>
            </li>
            <li>
              <a className="starhotel-header-nav-link" href="/login">
                Login
              </a>
            </li>
            <li>
              <a className="starhotel-header-btn" href="/signup">
                Register
              </a>
            </li>
          </ul>

          <div className="starhotel-header-hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
