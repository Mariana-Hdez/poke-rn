// Esto nos permite tipar correctamente las props que recibe la pantalla
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation";
import { useHomeController } from "./controller"; // Importamos el custom hook que maneja la lógica de la pantalla Home
import HomeLayout from "./layout";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  // - pokemons: lista de Pokémon procesada desde la API
  // - isLoading: estado de carga inicial
  // - fetchNextPage: función para cargar más resultados (scroll infinito)
  // - isFetchingNextPage: estado de carga mientras se obtiene la siguiente página
  const { pokemons, isLoading, fetchNextPage, isFetchingNextPage } =
    useHomeController();

  // Renderizamos el layout de Home, pasándole los datos y funciones necesarias
  return (
    <HomeLayout
      pokemons={pokemons}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      navigation={navigation}
    />
  );
}
