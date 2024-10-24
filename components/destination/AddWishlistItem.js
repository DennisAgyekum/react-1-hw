"use client";

import { useState } from 'react';
import styles from './destination.module.css';

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [customWishlist, setCustomWishlist] = useState('');
  const [thumbnail, setThumbnail] = useState('/destination/image-europa.png');

  const handleInputChange = (e) => {
    setCustomWishlist(e.target.value);
  

  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.value);
  
  };

  const onAddItemPressed = () => {
    if (customWishlist.trim() === ''){
      alert('Please enter a valid wishlist item name!');
  } else {
      onAddWishlistItem({name: customWishlist, thumbnail});
      setCustomWishlist('');
  }
}

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={customWishlist}
        onChange={handleInputChange}
        placeholder="Enter a planet name"
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select id="customWishlistThumbnail" value={thumbnail} onChange={handleThumbnailChange}>
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button className={styles.addWishListButton}  onClick={onAddItemPressed} >ADD CUSTOM</button>
    </div>
  );
};

export default AddWishlistItem;