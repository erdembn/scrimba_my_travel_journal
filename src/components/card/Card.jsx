import React from "react";
import "./card.css";

const Card = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="image-container">
          <img src={item.imageUrl} alt="image" />
        </div>
        <div className="card-content">
          <div className="location">
            <p>📍{item.location.toUpperCase()}</p>
            <a href={item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="card-title">{item.title}</h1>
          <p className="card-date">
            {item.startDate}-{item.endDate}
          </p>
          <p className="card-description">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
