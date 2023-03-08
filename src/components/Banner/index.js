import React from 'react'
import styles from "./Banner.module.css";

function Banner({img}) {
  return (
    <div className={styles.banner}
    style={{backgroundImage: `url(/imagens/banner-${img}.png)`}} />
  )
}

export default Banner