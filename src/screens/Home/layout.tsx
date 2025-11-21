import React, { useState } from "react";
import {
  View,
  TextInput,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import PokemonCard from "@/components/PokemonCard";
import { PokemonPage } from "@/types/pokemon";

// Props que recibe el componente:
// - pokemons: lista de resultados de Pokémon (cada uno con name y url)
// - isLoading: estado de carga inicial
// - fetchNextPage: función para cargar más resultados (scroll infinito)
// - isFetchingNextPage: estado de carga mientras se obtiene la siguiente página
// - navigation: objeto de navegación para moverse entre pantallas
type Props = {
  pokemons: PokemonPage["results"];
  isLoading: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  navigation: any; // se puede tipar mejor con RootStackParamList
};

// Componente de presentación que muestra la lista de Pokémon en la pantalla Home
const HomeLayout: React.FC<Props> = ({
  pokemons,
  isLoading,
  fetchNextPage,
  isFetchingNextPage,
  navigation,
}) => {
  // Estado local para manejar la búsqueda por nombre
  const [query, setQuery] = useState("");

  if (isLoading) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar por nombre"
        style={styles.searchInput}
        value={query}
        onChangeText={setQuery}
      />

      {/* Lista de Pokémon con scroll infinito */}
      <FlatList
        data={pokemons.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { name: item.name })}
          >
            <PokemonCard name={item.name} url={item.url} />
          </TouchableOpacity>
        )}
        // Al llegar al final de la lista, se carga la siguiente página
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.6} // umbral para disparar la carga antes de llegar al final
      />

      {/* Spinner que aparece mientras se carga la siguiente página */}
      {isFetchingNextPage && <ActivityIndicator />}
    </View>
  );
};

export default HomeLayout;
