import { Movie } from 'model/Movie';
import React from 'react';
import { View, Image, Text } from 'react-native';

export default function ItemList({ movie }: { movie: Movie }) {
  return (
    <View className="mb-4 flex max-w-80 flex-row items-center gap-4">
      <View className="h-44 w-44">
        <Image alt={movie.title} className="h-full w-full" source={{ uri: movie.poster }} />
      </View>
      <View className="flex max-w-96 flex-col">
        <Text className="text-xl">{movie.title}</Text>
        <Text className="text-xl">{movie.year}</Text>
      </View>
    </View>
  );
}
