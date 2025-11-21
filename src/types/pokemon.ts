// Página de pokemons (para Home)
export type PokemonPage = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

// Detalle de un pokemon (para Detail)
export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other?: {
      ["official-artwork"]?: {
        front_default: string;
      };
    };
  };
  types: { slot: number; type: { name: string; url: string } }[];
  abilities: { ability: { name: string; url: string } }[];

  stats?: { base_stat: number; effort: number; stat: { name: string; url: string } }[];
  moves?: { move: { name: string; url: string } }[];
  base_experience?: number;
  order?: number;
};

// Alias más genérico
export type Pokemon = PokemonDetail;


