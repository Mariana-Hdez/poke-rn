import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import styles from "./styles";

type Props = {
  name: string;
  url: string;
};

const PokemonCard: React.FC<Props> = ({ name, url }) => {
  const { data: pokemon, isLoading } =
    require("./controller").usePokemonCardController(url);

  if (isLoading) {
    return (
      <View style={styles.card}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!pokemon) {
    return (
      <View style={styles.card}>
        <Text>{name}</Text>
        <Text>No se pudo cargar</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            pokemon.sprites.other?.["official-artwork"]?.front_default ||
            pokemon.sprites.front_default,
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
    </View>
  );
};

export default PokemonCard;
