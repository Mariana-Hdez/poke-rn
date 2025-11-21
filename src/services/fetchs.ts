
// Esto centraliza la configuración de las llamadas HTTP
import { api } from "./api";

// - PokemonPage: lista paginada de Pokémon
// - PokemonDetail: detalle completo de un Pokémon
import type { PokemonPage, PokemonDetail } from "@/types/pokemon";

// Función asíncrona que obtiene una página de Pokémon desde la PokéAPI
export const fetchPokemonsPage = async (
  offset: number
): Promise<PokemonPage> => {
  // Realizamos la petición GET a la ruta /pokemon con parámetros de paginación
  // Ejemplo: /pokemon?offset=40&limit=20
  const response = await api.get<PokemonPage>(
    `pokemon?offset=${offset}&limit=20`
  );

  return response.data;
};

// Función asíncrona que obtiene el detalle de un Pokémon desde la PokéAPI
// Recibe el 'name' del Pokémon y devuelve un objeto tipado como 'PokemonDetail'
export const fetchPokemonDetail = async (
  name: string
): Promise<PokemonDetail> => {
  
  const response = await api.get<PokemonDetail>(`pokemon/${name}`);

  // Retornamos los datos de la respuesta, asegurando que cumplen con la interfaz 'PokemonDetail'
  return response.data;
};
