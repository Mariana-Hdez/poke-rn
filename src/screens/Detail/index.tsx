// Esto nos permite tipar correctamente las props que recibe la pantalla
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation";
import { useDetailController } from "./controller"; // Importamos el custom hook que maneja la lógica de obtener el detalle del Pokémon
import DetailLayout from "./layout";

// Usamos 'NativeStackScreenProps' para tipar con el stack definido en RootStackParamList
type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

// Componente principal de la pantalla de detalle
export default function DetailScreen({ route }: Props) {
  const { name } = route.params;

  // Usamos el hook 'useDetailController' para obtener los datos del Pokémon
  const { data: pokemon, isLoading } = useDetailController(name);

  return <DetailLayout pokemon={pokemon} isLoading={isLoading} />;
}
