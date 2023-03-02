
  import React from "react";

  import "./MusicCardStyle.css";

  import songcover from "../../assets/songcover.jpg";
  import asake from "../../assets/asake.jpg";

  const MusicCard = () => {
    return (
      <div className="header-container">
        <div className="parent-card-container">
          <div className="card-container">
            <img src={songcover} alt="songcover" className="song-cover" />
            <h1>Baby</h1>
            <h6>Joeboy</h6>
          </div>
          <div className="card-container">
            <img src={asake} alt="songcover" className="song-cover" />
            <h1>Yoga</h1>
            <h6>Asake</h6>
          </div>
          <div className="card-container">
            <img src={asake} alt="songcover" className="song-cover" />
            <h1>Joha</h1>
            <h6>Asake</h6>
          </div>
          <div className="card-container">
            <img src={asake} alt="songcover" className="song-cover" />
            <h1>Terminator</h1>
            <h6>Asake</h6>
          </div>
        </div>

        <div className="parent-card-container">
          <div className="card-container1">
            <img src={songcover} alt="songcover" className="song-cover" />
            <h1>Baby</h1>
            <h6>Joeboy</h6>
          </div>
          <div className="card-container1">
            <img src={asake} alt="songcover" className="song-cover" />
            <h1>Yoga</h1>
            <h6>Asake</h6>
          </div>
          <div className="card-container1">
            <img src={asake} alt="songcover" className="song-cover" />
            <h1>Joha</h1>
            <h6>Asake</h6>
          </div>
          <div className="card-container1">
            <img src={asake} alt="songcover" className="song-cover" />
            <h1>Terminator</h1>
            <h6>Asake</h6>
          </div>
        </div>
      </div>
    );
  };

  export default MusicCard;


