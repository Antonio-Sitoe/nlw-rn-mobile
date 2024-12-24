import React from 'react';
import { View, Text } from 'react-native';
import { IconProps } from "@tabler/icons-react-native"

import { colors } from "@/styles/theme"

type Props = {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View className="w-full flex-row gap-4">
      {/* @ts-ignore */}
      {Icon && <Icon size={32} color={colors.red.base} />}

      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-600">{title}</Text>
        <Text className="text-sm font-normal text-gray-500 mt-1">{description}</Text>
      </View>
    </View>
  )
}
