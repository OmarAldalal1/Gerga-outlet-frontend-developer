import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToWishlist(product) {
    const exists = favorites.find((item) => item.id === product.id);

    if (exists) {
      removeFromWishlist(product.id);
    } else {
      setFavorites([...favorites, product]);
    }
  }

  function removeFromWishlist(id) {
    setFavorites(favorites.filter((item) => item.id !== id));
  }

  function isFavorite(id) {
    return favorites.some((item) => item.id === id);
  }

  return (
    <WishlistContext.Provider
      value={{
        favorites,
        addToWishlist,
        removeFromWishlist,
        isFavorite,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
