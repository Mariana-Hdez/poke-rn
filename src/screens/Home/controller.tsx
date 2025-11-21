// Nos permite manejar consultas paginadas con scroll infinito
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchPokemonsPage } from "@/service/fetchs";
import type { PokemonPage } from "@/types/pokemon";

// Custom hook que controla la lógica de la pantalla Home
export const useHomeController = () => {
  const query = useInfiniteQuery({
    queryKey: ["pokemons"],

    // 'queryFn' es la función que se ejecuta para obtener los datos
    // Recibe 'pageParam' que indica el offset de la página actual
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

  // Usamos 'useMemo' para transformar los datos en una lista plana de Pokémon
  // Esto evita recalcular en cada render si los datos no cambian
  const pokemons = useMemo(
    () => query.data?.pages.flatMap((p) => p.results) || [],
    [query.data]
  );

  return { ...query, pokemons };
};
