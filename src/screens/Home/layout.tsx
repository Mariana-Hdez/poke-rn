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

type Props = {
  pokemons: PokemonPage["results"];
  isLoading: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  navigation: any; // para tipar
};

const HomeLayout: React.FC<Props> = ({
  pokemons,
  isLoading,
  fetchNextPage,
  isFetchingNextPage,
  navigation,
}) => {
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
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.6}
      />

      {isFetchingNextPage && <ActivityIndicator />}
    </View>
  );
};

export default HomeLayout;
