import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation";
import { useDetailController } from "./controller";
import DetailLayout from "./layout";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function DetailScreen({ route }: Props) {
  const { name } = route.params;
  const { data: pokemon, isLoading } = useDetailController(name);

  return <DetailLayout pokemon={pokemon} isLoading={isLoading} />;
}
