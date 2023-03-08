import React from 'react'
import styles from "./Card.module.css";
import iconeFavoritar from "./favorite_outline.png";

function Card({id, title, banner}) {
  return (
    <div className={styles.container}>
        <img src={banner} alt={title} className={styles.banner} />
        <h2>{title}</h2>
        <img src={iconeFavoritar} alt="iconeFavoritar" className={styles.fav}/>
    </div>
  )
}

export default Card