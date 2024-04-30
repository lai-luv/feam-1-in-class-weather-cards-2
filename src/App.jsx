import React from 'react';
import './App.css';
import img1 from "./assets/weather-1.png";
import img2 from "./assets/weather-2.png";
import img3 from "./assets/weather-3.png";
import img4 from "./assets/weather-4.png";

function Cards(props) {
  return (
    <div>
      <div className="card-wrapper">
        <div className="img-wraperr">
          <img src={props.img}  />
          <p>{props.title}</p>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  let card1 = {
    img: img1,
    title: 'USA National Forecast',
    subtitle: 'Looking ahead to your Halloween forecast'
  };
  let card2 = {
    img: img2,
    title: 'Wild Animals',
    subtitle: "'Lucky to be alive': Whale Takes Out Windsurfer"
  };
  let card3 = {
    img: img3,
    title: 'Sponsored Content by Ford',
    subtitle: '5 Ways Driving At Night Could Be A Little Easier'
  };
  let card4 = {
    img: img4,
    title: 'Weather News',
    subtitle: 'Even Our Meteorologists Were Stumped At First'
  };

  return (
    <div className="card-container">
      <h1>Trending Today</h1>
      <div className="img-container">
        <Cards img={card1.img} title={card1.title} subtitle={card1.subtitle} />
        <Cards img={card2.img} title={card2.title} subtitle={card2.subtitle} />
        <Cards img={card3.img} title={card3.title} subtitle={card3.subtitle} />
        <Cards img={card4.img} title={card4.title} subtitle={card4.subtitle} />
      </div>
      <button className="moreNewsButton" type="button"> More News </button>
    </div>
  );
}


