import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PokemonDetail } from "@/types/pokemon";

// Definimos el tipo del contexto de favoritos
// Incluye:
// - favorites: lista de Pokémon guardados como favoritos
// - toggleFavorite: agrega o quita un Pokémon de favoritos
// - isFavorite: verifica si un Pokémon está en favoritos
// - clearFavorites: elimina todos los favoritos
type FavoritesContextType = {
  favorites: PokemonDetail[];
  toggleFavorite: (pokemon: PokemonDetail) => void;
  isFavorite: (name: string) => boolean;
  clearFavorites: () => void;
};

// Creamos el contexto con valor inicial undefined
const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<PokemonDetail[]>([]);

  // Cargar favoritos al inicio desde AsyncStorage
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

  // Guardar favoritos cada vez que cambian en AsyncStorage
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem("favoritos", JSON.stringify(favorites));
      } catch (e) {
        console.error("Error al guardar favoritos", e);
      }
    })();
  }, [favorites]);

  // Alternar un Pokémon en favoritos (agregar o quitar)
  const toggleFavorite = useCallback((pokemon: PokemonDetail) => {
    setFavorites(
      (prev) =>
        prev.some((p) => p.id === pokemon.id)
          ? prev.filter((p) => p.id !== pokemon.id) // si ya está, lo quitamos
          : [...prev, pokemon] // si no está, lo agregamos
    );
  }, []);

  // Verificar si un Pokémon está en favoritos
  const isFavorite = useCallback(
    (name: string) => favorites.some((p) => p.name === name),
    [favorites]
  );

  // Limpiar todos los favoritos
  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  // Proveemos el contexto a los hijos
  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook personalizado para consumir el contexto de favoritos
export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
};
