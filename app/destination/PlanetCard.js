import React from "react";
import styles from "../../components/destination/destination.module.css";


export default function PlanetCards({
    name,
    description,
    thumbnail,
    isSelected,
    index,
    onAddOrRemovePlanet,
  }) {
    return (
      <div className={styles.planetCard}>
        <img
          className={styles.planetThumbnail}
          src={thumbnail}
          alt={`image of ${name}`}
        />
        <div className={styles.planetDescription}>
          <h2>
            {name} {isSelected && "- SELECTED"}
          </h2>
          <p>{description}</p>
        </div>
        <button
          className={`${styles.roundButton} ${isSelected ? styles.selected : ''}`}
          aria-pressed={isSelected}
          onClick={() => onAddOrRemovePlanet(name, index)}
        >
          {isSelected ? "REMOVE" : "ADD PLANET"}
        </button>
      </div>
    );
  }

