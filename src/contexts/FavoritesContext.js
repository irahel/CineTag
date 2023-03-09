import { createContext, useState, useContext } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "FavoritesContext";

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => {
    const { favorites, setFavorites } = useContext(FavoritesContext);

    const addFavorite = (newFav) => {
        const favoriteAlreadyExists = favorites.some(fav => fav.id === newFav.id);

        let newList = [...favorites];

        if (!favoriteAlreadyExists) {
            newList.push(newFav);
            return setFavorites(newList);
        }
        newList.splice(
            newList.findIndex(
              item => item.id === newList.find(item => item.id === newFav.id).id
            ),
            1
          )
        return setFavorites(newList);
    }

    return { favorites, addFavorite };
}