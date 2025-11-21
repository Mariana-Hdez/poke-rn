import { api } from "./api";
import type { PokemonPage, PokemonDetail } from "@/types/pokemon";

export const fetchPokemonsPage = async (
  offset: number
): Promise<PokemonPage> => {
  const response = await api.get<PokemonPage>(
    `pokemon?offset=${offset}&limit=20`
  );
  return response.data;
};

export const fetchPokemonDetail = async (
  name: string
): Promise<PokemonDetail> => {
  const response = await api.get<PokemonDetail>(`pokemon/${name}`);
  return response.data;
};

