import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from "react-native"
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"
import { colors } from "@/styles/theme"
type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-14 max-h-14 bg-green-500 rounded-lg items-center justify-center flex-row gap-3.5"
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

function Title({ children }: TextProps) {
  return <Text className="text-gray-100 font-semibold text-base">{children}</Text>
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />
}
Button.Title = Title
Button.Icon = Icon
export { Button }