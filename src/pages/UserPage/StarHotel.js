import React from "react";
import "../cssUser/starHotel.css";
import clockIcon from "../../assets/img/clock.svg";
import checkIcon from "../../assets/img/check-square.svg";
import coffeeIcon from "../../assets/img/coffee.svg";
import wifiIcon from "../../assets/img/wifi.svg";
import jumbotronImg from "../../assets/img/Homepage-jumbotron.webp";
import hotel1 from "../../assets/img/hotel-1.webp";
import hotel2 from "../../assets/img/hotel-2.webp";
import hotel3 from "../../assets/img/hotel-3.webp";
import customer1 from "../../assets/img/customer1.webp";
import customer2 from "../../assets/img/customer2.webp";
import customer3 from "../../assets/img/customer3.webp";
import { useNavigate } from "react-router";
import Header from "./Header";   
import Footer from "./Footer";

export default function StarHotel() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />   

      {/* Hero Section */}
      <section className="starhotel-hero">
        <div className="starhotel-hero-overlay">
          {/* Left Text */}
          <div className="starhotel-hero-text">
            <h1>
              Discover The Perfect Balance <br />
              Of Hospitality, Luxury And <br />
              Comfort.
            </h1>
            <p>
              We are focused on providing clients with the highest level
              of comfort and excellent affordable rates
            </p>
            <a href="/booking" className="starhotel-btn starhotel-btn-fill">
              Book Now
            </a>
          </div>

          {/* Right Booking Form */}
          <div className="starhotel-booking-form">
            <h3>Scared you can't afford it?</h3>
            <p>
              Don’t worry, our hotel offers the best <br />
              affordable rates you can ever find.
            </p>
            <form>
              <input type="date" placeholder="Arrival Date" />
              <input type="date" placeholder="Departure Date" />
              <input type="number" placeholder="Guests" />
              <select>
                <option>Room type</option>
                <option>Standard Room</option>
                <option>Executive Room</option>
                <option>King Suite</option>
              </select>
              <button type="submit" className="starhotel-btn starhotel-btn-fill">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Enjoy Section */}
      <div className="starhotel-enjoy-container">
        <div className="starhotel-enjoy-header">
          <h2 className="starhotel-enjoy-heading">
            Enjoy your stay
            <br />
            at our hotel
          </h2>
          <hr className="starhotel-horizontal" />
          <p>
            We are more than being a hotel because we are able
            <br /> to combine the quality standard of a hotel with the
            <br /> advantages of an apartment.
          </p>
        </div>
        <div className="starhotel-enjoy-services">
          <div className="starhotel-first-col">
            <div className="starhotel-upper">
              <img src={clockIcon} alt="clock icon" />
              <h3>24 hours Room Service</h3>
              <p>You have access to 24-hours a day room service at our hotel.</p>
            </div>
            <div className="starhotel-lower">
              <img src={checkIcon} alt="fitness icon" />
              <h3>Fitness and Spa</h3>
              <p>
                Access to fitness and Spa is part of our hotel package when you
                make a booking.
              </p>
            </div>
          </div>
          <div className="starhotel-sec-col">
            <div className="starhotel-upper">
              <img src={coffeeIcon} alt="coffee icon" />
              <h3>Restaurant and Bars</h3>
              <p>
                You have access to the world state of art restaurants and bars
                at our hotel
              </p>
            </div>
            <div className="starhotel-lower">
              <img src={wifiIcon} alt="wifi icon" />
              <h3>Free Wi-Fi Access</h3>
              <p>
                You have access to 24-hours free Wi-Fi services irrespective of
                any room.
              </p>
            </div>
          </div>
          <div className="starhotel-third-col">
            <img
              src={jumbotronImg}
              alt="pool"
              className="starhotel-third-col-video"
            />
          </div>
        </div>
      </div>

      {/* Offers Section */}
<section className="starhotel-special-offers">
  <div className="starhotel-page-header-container">
    <h2 className="starhotel-page-header">
      Simplicity is the ultimate <br /> Watchword
    </h2>
  </div>
  <div className="starhotel-row">
    {/* Left Image Grid */}
    <div className="starhotel-offers-image-grid">
      <img src={hotel1} alt="room" />
      <img src={hotel2} alt="room" />
      <img src={hotel3} alt="room" />
      <img src={hotel1} alt="room" />
      <img src={hotel2} alt="room" />
      <img src={hotel3} alt="room" />
    </div>

    {/* Right Text Content */}
    <div className="starhotel-offers-text">
      <p>
        The fact that we are run by hospitality professionals
        and equipped with the world best interior designers is why
        our rooms and suites are second to none in the universe.
      </p>
      <ul>
        <li> Standard Room</li>
        <li> Executive Room</li>
        <li> King Suite</li>
      </ul>
      <a
        href="/rooms-and-suites"
        className="starhotel-btn starhotel-btn-fill starhotel-btn-large"
      >
        View All
      </a>
    </div>
  </div>
</section>


      {/* Reviews */}
      <div className="starhotel-review-container">
        <div className="starhotel-review-header">
          <h2 className="starhotel-review-title">Client Reviews</h2>
          <hr className="starhotel-horizontal" />
          <p>
            We are very proud of the services we offer to our customers.
            <br />
            Read every word from our happy customers.
          </p>
        </div>
        <div className="starhotel-cards-container">
          <div className="starhotel-card">
            <img src={customer1} alt="customer 1" />
            <h2>Mark Essien</h2>
            <h3>Lagos, Nigeria</h3>
            <p>
              Words can't explain the kind of treatment I received. They are the
              best in the country.
            </p>
          </div>
          <div className="starhotel-card">
            <img src={customer2} alt="customer 2" />
            <h2>Seyi Onifade</h2>
            <h3>Lagos, Nigeria</h3>
            <p>
              Star hotels makes you feel the best room quality that makes you
              feel the comfort of a home.
            </p>
          </div>
          <div className="starhotel-card">
            <img src={customer3} alt="customer 3" />
            <h2>Fayemi David</h2>
            <h3>Lagos, Nigeria</h3>
            <p>
              My Family and I are very happy when we lodge. They are by far the
              best in the universe.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="starhotel-footer">
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
      </footer> */}

      <Footer/>
    </div>
  );
}
