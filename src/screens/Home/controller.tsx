import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchPokemonsPage } from "@/service/fetchs";
import type { PokemonPage } from "@/types/pokemon";

export const useHomeController = () => {
  const query = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam = 0 }): Promise<PokemonPage> =>
      fetchPokemonsPage(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const next = lastPage.next;
      if (!next) return undefined;
      const params = new URLSearchParams(next.split("?")[1]);
      return Number(params.get("offset")) || undefined;
    },
  });

  const pokemons = useMemo(
    () => query.data?.pages.flatMap((p) => p.results) || [],
    [query.data]
  );

  return { ...query, pokemons };
};
