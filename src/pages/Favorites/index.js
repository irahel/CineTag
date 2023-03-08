import React from 'react';
import styles from "./Favorites.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";

function Favorites() {
  return (
    <>
    <Banner img='favoritos'/>
    <Title>
        <h1>Meus Favoritos</h1>
    </Title>
    <section className={styles.container}>
        <Card id="1" title="Sony" banner="https://github.com/irahel.png"/>

    </section>
    </>
  )
}

export default Favorites