import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, StyleSheet, TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import { RootStackParamList } from '../navigation';
import { Movie } from 'model/Movie';
import { useEffect, useState } from 'react';
import ItemList from 'components/ItemList';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const apiURL = 'http://192.168.0.11:3000/movies';
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView>
      <View className="p-4">
        {movies ? (
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                <ItemList movie={item} />
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
