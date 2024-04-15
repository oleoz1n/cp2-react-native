import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text, Image } from 'react-native';

import { RootStackParamList } from '../navigation';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details() {
  const router = useRoute<DetailsSreenRouteProp>();

  return (
    <View className="flex flex-1 flex-col gap-4 p-4">
      <Text className="text-center text-3xl">{router.params.title}</Text>
      <Image className="h-80 w-80 self-center" source={{ uri: router.params.poster }} />
      <Text className="text-xl">Year: {router.params.year}</Text>
      <Text className="text-xl">Genêros: {router.params.genre}</Text>
      <Text className="text-xl">Sinopse: {router.params.sinopse}</Text>
      <Text className="text-xl">Diretor: {router.params.director}</Text>
    </View>
  );
}
