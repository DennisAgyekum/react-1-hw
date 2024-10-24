"use client";

import { useState } from "react";
import PlanetCards from "./PlanetCard";

import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishlistItem from "@/components/destination/PlanetWishListItem";
import styles from "@/components/destination/destination.module.css";

export const Destinations = () => {
  const planetItems = [
    {
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
      isSelected: false,
    },
    {
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
      isSelected: false,
    },
    {
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
      isSelected: false,
    },
    {
      name: "Titan",
      description:
        "Titan, Saturn\\'s largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
      isSelected: false,
    },
  ];
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const togglePlanetSelection = (name, index) => {
    setSelectedPlanets((prevSelectedPlanets) =>
      prevSelectedPlanets.includes(name)
        ? prevSelectedPlanets.filter((planet) => planet !== name)
        : [...prevSelectedPlanets, name]
    );

    console.log(`You selected the planet: ${name}, with index: ${index}`);
  };

  const onAddWishlistItem = (item) => {
    setSelectedPlanets((prevSelectedPlanets) => {

      if (prevSelectedPlanets.some((planet) => planet === item.name)) {
        alert(`${item.name} is already in your wishlist.`);
        return prevSelectedPlanets;
      }
      return [...prevSelectedPlanets, item.name];
    });
  };

  const numberOfPlanets = selectedPlanets.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist : </p>
          ) : (
            <p>
              You have {numberOfPlanets}
              {""}
              {numberOfPlanets > 1 ? "planets" : "planet"} in your wishlist
            </p>
          )}
          {selectedPlanets.map((planet, index) => (
            <p key={index}>{planet}</p>
          ))}
          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.length === 0 ? (
              <p>No planets in wishlist!</p>
            ) : (
              selectedPlanets.map((planet, index) => (
                <PlanetWishlistItem
                  key={index}
                  name={planet}
                  onRemove={() => togglePlanetSelection(planet)}
                  thumbnail={
                    planetItems.find((item) => item.name === planet)?.thumbnail
                  }
                />
              ))
            )}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planetItems.map((item, index) => (
            <PlanetCards
              key={index}
              name={item.name}
              description={item.description}
              thumbnail={item.thumbnail}
              isSelected={selectedPlanets.includes(item.name)}
              onAddOrRemovePlanet={() => togglePlanetSelection(item.name, index)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
