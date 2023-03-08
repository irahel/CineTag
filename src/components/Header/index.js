import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png";
import HeaderLink from "components/Header/HeaderLink";

function index() {
  return (
    <header className={styles.header}>
        <Link to="./">
            <img src={logo} alt="Logo do cinetag" />
        </Link>
        <HeaderLink url="./">
            Home
        </HeaderLink>
        <HeaderLink url="./Favoritos">
            Favoritos
        </HeaderLink>

    </header>
  )
}

export default index