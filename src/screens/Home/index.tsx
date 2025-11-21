import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation";
import { useHomeController } from "./controller";
import HomeLayout from "./layout";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const { pokemons, isLoading, fetchNextPage, isFetchingNextPage } =
    useHomeController();

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
