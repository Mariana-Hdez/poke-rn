import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "@/service/fetchs";
import type { PokemonDetail } from "@/types/pokemon";

export const useDetailController = (name: string) => {
  const query = useQuery({
    queryKey: ["pokemon", name],
    queryFn: (): Promise<PokemonDetail> => fetchPokemonDetail(name),
  });

  return query;
};
