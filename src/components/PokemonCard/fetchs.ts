import { api } from "@/services/api";
import { Pokemon } from "@/types/pokemon";

export const fetchPokemonCard = async (url: string): Promise<Pokemon> => {
  const res = await api.get(url);
  return res.data as Pokemon;
};
