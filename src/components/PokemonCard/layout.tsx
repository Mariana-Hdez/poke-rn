import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import styles from "./styles";

// Definimos el tipo de las props que recibe el componente
type Props = {
  name: string; // Nombre del Pokémon
  url: string; // URL del endpoint en la PokéAPI para obtener datos del Pokémon
};

// Componente funcional que representa una tarjeta de Pokémon
const PokemonCard: React.FC<Props> = ({ name, url }) => {
  // Usamos un custom hook definido en controller para obtener los datos del Pokémon
  // Retorna 'pokemon' con la información y 'isLoading' para saber si está cargando
  const { data: pokemon, isLoading } =
    require("./controller").usePokemonCardController(url);

  // Estado de carga: mientras se obtienen los datos mostramos un spinner
  if (isLoading) {
    return (
      <View style={styles.card}>
        <ActivityIndicator />
      </View>
    );
  }

  // Estado de error o sin datos: si no se pudo obtener el Pokémon mostramos mensaje
  if (!pokemon) {
    return (
      <View style={styles.card}>
        <Text>{name}</Text>
        <Text>No se pudo cargar</Text>
      </View>
    );
  }

  // Estado exitoso: mostramos la tarjeta con imagen y nombre del Pokémon
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
      {/* Nombre del Pokémon */}
      <Text style={styles.name}>{pokemon.name}</Text>
    </View>
  );
};

// Exportamos el componente para usarlo en otras partes de la app
export default PokemonCard;
