import React from 'react';
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import videos from 'json/db.json';
import styles from './Main.module.css';

function Main() {
  return (
    <>
    <Banner img="home" />
    <Title>
      <h1>Um lugar para guardar seus vídeos e filmes!</h1>
    </Title>
    <section className={styles.container}>
      {
        videos.map((video) => {
          return (
            <Card
              key={video.id}
              id={video.id}
              title={video.titulo}
              banner={video.capa}
            />
          )
        })
      }
      </section>
    </>
  )
}

export default Main