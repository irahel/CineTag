import React from 'react'
import styles from "./Card.module.css";
import iconeFavoritar from "./favorite_outline.png";
import iconeFavoritarComplete from "./favorite.png";
import { useFavorites } from "contexts/FavoritesContext";

function Card({id, title, banner}) {

  const { favorites, addFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === id);
  const icon = isFavorite ? iconeFavoritarComplete : iconeFavoritar;

  return (
    <div className={styles.container}>
        <img src={banner} alt={title} className={styles.banner} />
        <h2>{title}</h2>
        <img src={icon} alt="iconeFavoritar" className={styles.fav}
            onClick={() => addFavorite({id, title, banner})}
        />
    </div>
  )
}

export default Card