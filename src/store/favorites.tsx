import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PokemonDetail } from "@/types/pokemon";

type FavoritesContextType = {
  favorites: PokemonDetail[];
  toggleFavorite: (pokemon: PokemonDetail) => void;
  isFavorite: (name: string) => boolean;
  clearFavorites: () => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<PokemonDetail[]>([]);

  // cargar favoritos al inicio
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem("favoritos");
        if (raw) setFavorites(JSON.parse(raw) as PokemonDetail[]);
      } catch (e) {
        console.error("Error cargar favoritos", e);
      }
    })();
  }, []);

  // guardar favoritos cada vez que cambian
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem("favoritos", JSON.stringify(favorites));
      } catch (e) {
        console.error("Error al guardar favoritos", e);
      }
    })();
  }, [favorites]);

  const toggleFavorite = useCallback((pokemon: PokemonDetail) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === pokemon.id)
        ? prev.filter((p) => p.id !== pokemon.id)
        : [...prev, pokemon]
    );
  }, []);

  const isFavorite = useCallback(
    (name: string) => favorites.some((p) => p.name === name),
    [favorites]
  );

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
};
