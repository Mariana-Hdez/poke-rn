import { useQuery } from "@tanstack/react-query";
import { fetchPokemonCard } from "./fetchs";
import { Pokemon } from "@/types/pokemon";

export const usePokemonCardController = (url: string) => {
  return useQuery<Pokemon>({
    queryKey: ["pokemon-card", url],
    queryFn: () => fetchPokemonCard(url),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
