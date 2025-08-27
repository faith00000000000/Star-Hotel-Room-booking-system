import React from "react";
import { useNavigate, NavLink } from "react-router";
import "../cssUser/starHotel.css";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("authToken"); // check if logged in

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // clear token
    navigate("/"); // redirect to login
  };

  return (
    <header className="starhotel-header">
      <div className="starhotel-header-container">
        <nav className="starhotel-header-nav-bar">
          <div className="starhotel-header-nav-logo">
            <NavLink to="/">
              <img
                src="https://res.cloudinary.com/joshuafolorunsho/image/upload/v1591615159/star_hotels_logo.png"
                alt="star hotels logo"
              />
            </NavLink>
          </div>

          <ul className="starhotel-header-nav-lists">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "starhotel-header-nav-link starhotel-header-active"
                    : "starhotel-header-nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roomsAndSuites"
                className={({ isActive }) =>
                  isActive
                    ? "starhotel-header-nav-link starhotel-header-active"
                    : "starhotel-header-nav-link"
                }
              >
                Rooms and Suites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/findBooking"
                className={({ isActive }) =>
                  isActive
                    ? "starhotel-header-nav-link starhotel-header-active"
                    : "starhotel-header-nav-link"
                }
              >
                Find my Booking
              </NavLink>
            </li>

            {isLoggedIn ? (
              <li>
                <button
                  className="starhotel-header-btn logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "starhotel-header-nav-link starhotel-header-active"
                        : "starhotel-header-nav-link"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="starhotel-header-btn">
                    Register
                  </NavLink>
                </li>
              </>
            )}
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
