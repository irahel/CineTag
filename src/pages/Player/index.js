import React from 'react';
import styles from './Player.module.css';
import Banner from 'components/Banner';
import Title from 'components/Title';
import videos from 'json/db.json';
import { useParams } from 'react-router-dom';

function Player() {
    const params = useParams();
    const video = videos.find((video) => video.id === Number(params.id));

    return (
    <>
    <Banner img="player"/>
    <Title>
        <h1>Player</h1>
    </Title>
    <section className={styles.container}>
        <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    </>
  )
}

export default Player