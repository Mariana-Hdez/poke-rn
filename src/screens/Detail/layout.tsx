import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import type { PokemonDetail } from "@/types/pokemon";
import styles from "./styles";
import { useFavorites } from "@/store/favorites";

type Props = {
  pokemon?: PokemonDetail;
  isLoading: boolean;
};

const DetailLayout: React.FC<Props> = ({ pokemon, isLoading }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  if (isLoading) return <ActivityIndicator style={{ flex: 1 }} />;
  if (!pokemon) return <Text>No se encontró el Pokémon</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{pokemon.name}</Text>

      <Image
        source={{
          uri:
            pokemon.sprites.other?.["official-artwork"]?.front_default ||
            pokemon.sprites.front_default,
        }}
        style={styles.image}
      />

      <Text>Altura: {pokemon.height}</Text>
      <Text>Peso: {pokemon.weight}</Text>
      <Text>Tipos: {pokemon.types.map((t) => t.type.name).join(", ")}</Text>
      <Text>
        Habilidades: {pokemon.abilities.map((a) => a.ability.name).join(", ")}
      </Text>

      {/* ⭐ Botón de favoritos */}
      <Text
        style={{ marginVertical: 12, fontSize: 18 }}
        onPress={() => toggleFavorite(pokemon)}
      >
        {isFavorite(pokemon.name)
          ? "★ Quitar de favoritos"
          : "☆ Agregar a favoritos"}
      </Text>

      {/* 📊 Stats principales */}
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Stats:</Text>
        {pokemon.stats?.map((s) => {
          if (["hp", "attack", "defense"].includes(s.stat.name)) {
            return (
              <Text key={s.stat.name} style={{ fontSize: 16 }}>
                {s.stat.name.toUpperCase()}: {s.base_stat}
              </Text>
            );
          }
          return null;
        })}
      </View>
    </View>
  );
};

export default DetailLayout;
