import React from 'react';
import styles from "./Favorites.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import { useFavorites } from 'contexts/FavoritesContext';

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <>
    <Banner img='favoritos'/>
    <Title>
        <h1>Meus Favoritos</h1>
    </Title>
    <section className={styles.container}>
      {favorites.map((fav) => (
        <Card key={fav.id} id={fav.id} title={fav.title} banner={fav.banner}/>
      ))}

    </section>
    </>
  )
}

export default Favorites