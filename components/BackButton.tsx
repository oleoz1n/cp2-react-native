import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function BackButton({ goBack }: { goBack: any }) {
  return (
    <View>
      <Feather name="chevron-left" size={16} color="#007AFF" />
      <Text onPress={goBack}>Back</Text>
    </View>
  );
}
