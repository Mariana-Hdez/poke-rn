/*import { api } from "@/services/api";
import { Pokemon } from "@/types/pokemon";

export const fetchPokemonDetail = async (name: string): Promise<Pokemon> => {
  const res = await api.get(`/pokemon/${name}`);
  return res.data as Pokemon;
};*/

import { api } from "@/services/api"; // Importamos la instancia de API configurada (por ejemplo con axios)
import { Pokemon } from "@/types/pokemon";

// Recibe el 'name' del Pokémon y devuelve un objeto tipado como 'Pokemon
export const fetchPokemonDetail = async (name: string): Promise<Pokemon> => {
  const res = await api.get(`/pokemon/${name}`); //la petición GET a la ruta /pokemon/{name}
  return res.data as Pokemon;
};


