import React from 'react';
import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';
import { FavoritesProvider } from 'contexts/FavoritesContext';
import { Outlet } from 'react-router-dom';

function DefaultPage() {
  return (
    <main>
        <Header />
        <FavoritesProvider>
            <Container>
                <Outlet />
            </Container>

        </FavoritesProvider>
        <Footer />
    </main>
  )
}

export default DefaultPage