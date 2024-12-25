// import Header from "./components/header/Header";
// import Sidebar from "./components/sidebar/Sidebar";
// import Feed from "./components/feed/Feed";
// import Button from "./components/button/Button";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   return (
//     <>
//       {/* <Header /> */}
//       {/* <Button />
//       <Sidebar/>
//       <Feed/> */}
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import "./App.css";

import Logo from "./assets/31279719_7813617.jpg";
import DonationImg from "./assets/Ev2.jpg";
import GalleryImg1 from "./assets/Img2.jpg";
import GalleryImg2 from "./assets/Img2.jpg";
import AchievementImg1 from "./assets/Ach2.jpg";
import AchievementImg2 from "./assets/Ach3.jpg";
import EventImg1 from "./assets/Ev1.jpg";
import EventImg2 from "./assets/Ev3.jpg";

const App = () => {
  const [visibleDonations, setVisibleDonations] = useState(3);
  const [visibleGallery, setVisibleGallery] = useState(3);
  const [visibleAchievements, setVisibleAchievements] = useState(3);
  const [visibleEvents, setVisibleEvents] = useState(3);

  const donations = [
    { name: "Donation Name", raised: 1100, goal: 7000 },
    { name: "Donation Name", raised: 1100, goal: 7000 },
    { name: "Donation Name", raised: 1100, goal: 7000 },
    { name: "Donation Name", raised: 1100, goal: 7000 },
  ];

  const galleryImages = [
    GalleryImg1,
    GalleryImg2,
    GalleryImg1,
    GalleryImg2,
    GalleryImg1,
    GalleryImg2,
  ];
  const achievementsImages = [
    AchievementImg1,
    AchievementImg2,
    AchievementImg1,
    AchievementImg2,
    AchievementImg1,
  ];
  const events = [
    { name: "Event Name", time: "02:00 PM", img: EventImg1 },
    { name: "Event Name", time: "03:00 PM", img: EventImg2 },
    { name: "Event Name", time: "04:00 PM", img: EventImg1 },
    { name: "Event Name", time: "05:00 PM", img: EventImg2 },
    { name: "Event Name", time: "02:00 PM", img: EventImg1 },
    { name: "Event Name", time: "02:00 PM", img: EventImg2 },
  ];

  return (
    <div className="container">
      <Header />

      <div className="main-content">
        <div className="sidebar">
          <div className="header">
            <img src={Logo} alt="University Logo" className="logo" />
            <div className="header-icons">
              <i className="fa-solid fa-earth-americas"></i>
              <i className="fa-solid fa-location-dot"></i>
              <i className="fa-solid fa-phone"></i>
            </div>
          </div>
          <div className="section-header">
            <h5 className="section-title">Donation Portal</h5>
            <button
              className="see-all-btn"
              onClick={() => setVisibleDonations(donations.length)}
            >
              See all <span className="arrow-icon">➔</span>
            </button>
          </div>
          {donations.slice(0, visibleDonations).map((donation, index) => (
            <div key={index} className="donation-item">
              <img src={DonationImg} alt="Donation" className="donation-img" />
              <div className="donation-details">
                <h6 className="donation-name">{donation.name}</h6>
                <progress
                  value={donation.raised}
                  max={donation.goal}
                ></progress>
                <small>{`Raised ${donation.raised}/${donation.goal}`}</small>
              </div>
              <button className="button">Donate</button>
            </div>
          ))}
        </div>

        <div className="content">
          {/* Glimpse Gallery */}
          <div className="section">
            <div className="section-header">
              <h5 className="section-title">Glimpse Gallery</h5>
              <button
                className="see-all-btn"
                onClick={() => setVisibleGallery(galleryImages.length)}
              >
                See all <span className="arrow-icon">➔</span>
              </button>
            </div>
            <div className="gallery">
              {galleryImages.slice(0, visibleGallery).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index}`}
                  className="gallery-img"
                />
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="section">
            <div className="section-header">
              <h5 className="section-title">Achievements</h5>
              <button
                className="see-all-btn"
                onClick={() =>
                  setVisibleAchievements(achievementsImages.length)
                }
              >
                See all <span className="arrow-icon">➔</span>
              </button>
            </div>
            <div className="gallery">
              {achievementsImages
                .slice(0, visibleAchievements)
                .map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Achievement ${index}`}
                    className="gallery-img"
                  />
                ))}
            </div>
          </div>

          {/* Events */}
          <div className="section">
            <div className="section-header">
              <h5 className="section-title">Events</h5>
              <button
                className="see-all-btn"
                onClick={() => setVisibleEvents(events.length)}
              >
                See all <span className="arrow-icon">➔</span>
              </button>
            </div>
            <div className="events">
              {events.slice(0, visibleEvents).map((event, index) => (
                <div key={index} className="event-card">
                  <img src={event.img} alt={event.name} className="event-img" />
                  <div className="event-details">
                    <h6 className="event-title">{event.name}</h6>
                    <p className="event-time">{event.time}</p>
                    <button className="button">Register</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
