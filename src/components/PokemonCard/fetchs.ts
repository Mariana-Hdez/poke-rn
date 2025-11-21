import { api } from "@/services/api";

// Importamos el tipo 'Pokemon' definido en nuestro modelo de tipos
import { Pokemon } from "@/types/pokemon";

// Función que obtiene los datos de un Pokémon desde la PokéAPI
export const fetchPokemonCard = async (url: string): Promise<Pokemon> => {
  
  // Realizamos la petición GET usando la instancia 'api'
  const res = await api.get(url);

  // Retornamos los datos de la respuesta, asegurando que cumplen con la interfaz 'Pokemon'
  return res.data as Pokemon;
};
