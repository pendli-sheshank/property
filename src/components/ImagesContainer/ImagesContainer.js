import React, { useState } from "react";
import data from "../../Data";
import { RiHeartAddLine } from "react-icons/ri";
import "./index.css";

const ImagesContainer = () => {
  const [image, selectedImage] = useState(data[0]);
  const [bgColor, setBgColor] = useState();
  const [bookNow, bookingDone] = useState();

  const wishListtoggle = () => {
    setBgColor(!bgColor);
  };

  const bookingToggle = () => {
    bookingDone(!bookNow);
  };

  return (
    <div className="images-container">
      <div className="left-image-container">
        {data.map((i, index) => (
          <img
            key={index}
            style={{ border: image === i ? "2px solid black" : "" }}
            src={i}
            onClick={() => selectedImage(i)}
            alt={i}
            className="side-image card"
          />
        ))}
      </div>
      <div className="right-image-container">
        <img className="main-image card" src={image} alt="view" />
      </div>
      <div className="content-container card p-3">
        <h1>Meeting Room</h1>
        <p>Avalible</p>
        <div className="day-container">
          <div className="day">
            <label htmlFor="startdate">Start Date</label>
            <br />
            <input type="date" className="form-control" name="startdate" />
          </div>
          <div className="day">
            <label htmlFor="enddate">End Date</label>
            <br />
            <input type="date" className="form-control" name="enddate" />
          </div>
        </div>

        <div className="input">
          <label className="label" htmlFor="seats">
            No. of seats
          </label>
          <input name="seats" type="number" />
        </div>
        <div className="booking">
          <span>Rs.8000/day</span>
          <button onClick={bookingToggle}>
            {bookNow ? "Cancle" : "Book Now"}
          </button>
          <RiHeartAddLine
            onClick={wishListtoggle}
            className={bgColor ? "purple" : "white"}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesContainer;
