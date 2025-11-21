import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "@/service/fetchs"; // Importamos la función que obtiene el detalle de un Pokémon desde la API
import type { PokemonDetail } from "@/types/pokemon";

// Recibe el 'name' del Pokémon y retorna el estado de la consulta
export const useDetailController = (name: string) => {
  const query = useQuery({
    queryKey: ["pokemon", name],
    queryFn: (): Promise<PokemonDetail> => fetchPokemonDetail(name),
  });

  return query;
};
