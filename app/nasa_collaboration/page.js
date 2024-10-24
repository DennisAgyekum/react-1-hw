"use client";

import React, { useState, useEffect } from 'react';
import styles from "./page.module.css"

const API_KEY = 'TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM';

const NASA_URLs = {
  astronomyPicOfTheDay:  `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

  const RoverPhoto = ({src, date, roverName}) => {
  return (
      <div className={styles.nasaPicOfTheDayImg}>
          <img src={src} alt={`Rover: ${roverName} on ${date}`}/>
          <p className={styles.roverText}>{`Date: ${date}`}</p>
          <p className={styles.roverText}>{`Rover: ${roverName}`}</p>
      </div>
  );
}
 
export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const response = await fetch(NASA_URLs.marsRoverPhoto);
        const data = await response.json();
        setRoverPhoto(data);
      } catch (error) {
        console.error("Error fetching Mars rover photo:", error);
      }
    };

    const fetchAstronomyPicOfTheDay = async () => {
      try {
        const response = await fetch(NASA_URLs.astronomyPicOfTheDay);
        const data = await response.json();
        setDailyImg(data);
      } catch (error) {
        console.error("Error fetching astronomy picture of the day:", error);
      }
    };

    fetchRoverPhotos();
    fetchAstronomyPicOfTheDay();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the Day</h2>
          <div className={styles.astronomyContainer}>
            <h3>{dailyImg.title}</h3>
            <div className={styles.astronomyPic}>
              <img src={dailyImg.url} alt="Pillars of Creation" />
              <p>{dailyImg.explanation}</p>
            </div>
          </div>
        </section>

       { <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto.photos?.length? (
            <div className={styles.roverContainer}>
              {roverPhoto.photos.map((item, index) => (
                <div className={styles.roverPhotoCard} key={item.id}>
                   <RoverPhoto
                  key={index} 
                  src={item.img_src} 
                  date={item.earth_date}
                  roverName={item.rover.name}
                />
                </div>
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>}
      </main>
    </div>
  );
};


export default NasaCollaboration;
