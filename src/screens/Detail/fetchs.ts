/*import { api } from "@/services/api";
import { Pokemon } from "@/types/pokemon";

export const fetchPokemonDetail = async (name: string): Promise<Pokemon> => {
  const res = await api.get(`/pokemon/${name}`);
  return res.data as Pokemon;
};*/

import { api } from "@/services/api";
import { Pokemon } from "@/types/pokemon";

export const fetchPokemonDetail = async (name: string): Promise<Pokemon> => {
  const res = await api.get(`/pokemon/${name}`);
  return res.data as Pokemon;
};


