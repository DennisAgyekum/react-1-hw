import React from "react";
import styles from "@/components/destination/destination.module.css";

export default function PlanetWishlistItem({ name, onRemove, thumbnail }) {
  const onRemoveItem = () => {
    onRemove();
  };
    return (
      <div className={styles.wishlistItem}>
        <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
        <b>{name.toUpperCase()}</b>
        <button className={styles.selected}onClick={onRemoveItem}>remove</button>
      </div>
    );
  }