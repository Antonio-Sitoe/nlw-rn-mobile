import React from 'react';
import { View, Image, Text } from 'react-native';


export function Welcome() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={require("@/assets/logo.png")} className="w-12 h-12 mt-6 mb-7" />

      <Text className="text-2xl font-bold text-gray-600">Boas vindas ao Nearby!</Text>

      <Text className="text-base font-normal text-gray-500 mt-3">
        Tenha cupons de vantagem para usar em {"\n"}
        seus estabelecimentos favoritos.
      </Text>
    </View>
  )
}