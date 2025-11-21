import { useQuery } from "@tanstack/react-query"; // Nos permite manejar estados de carga, error y caché de forma declarativa
import { fetchPokemonCard } from "./fetchs";
import { Pokemon } from "@/types/pokemon";

// Recibe la 'url' del recurso y retorna el estado de la consulta
export const usePokemonCardController = (url: string) => {
  return useQuery<Pokemon>({
    // Aquí usamos un array con un nombre y la URL del Pokémon
    queryKey: ["pokemon-card", url],
    queryFn: () => fetchPokemonCard(url),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
