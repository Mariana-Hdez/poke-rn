/*import { api } from "@/services/api";
import { PokemonPage, Pokemon } from "@/types/pokemon";

export const fetchPokemonsPage = async (
  offset = 0,
  limit = 20
): Promise<PokemonPage> => {
  const res = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
  return res.data as PokemonPage;
};

export const fetchPokemonByName = async (name: string): Promise<Pokemon> => {
  const res = await api.get(`/pokemon/${name}`);
  return res.data as Pokemon;
};*/

import { api } from "@/services/api";
import { PokemonPage } from "@/types/pokemon";

export const fetchPokemonsPage = async (
  offset = 0,
  limit = 20
): Promise<PokemonPage> => {
  const res = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
  return res.data as PokemonPage;
};



