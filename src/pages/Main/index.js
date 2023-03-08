import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import videos from 'json/db.json';
import styles from './Main.module.css';

function Main() {
  console.log(videos);
  return (
    <>
    <Header />
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
    <Footer/>
    </>
  )
}

export default Main