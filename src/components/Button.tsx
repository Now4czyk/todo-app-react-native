import { Pressable, StyleSheet, Text, View } from "react-native";
import { FC } from "react";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonContainerStyle?: Object;
  buttonTextStyle?: Object;
}

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  buttonContainerStyle,
  buttonTextStyle,
}) => (
  <Pressable
    style={({ pressed }) => [
      pressed && styles.pressed,
      styles.container,
      buttonContainerStyle,
    ]}
    onPress={onPress}
  >
    <View>
      <Text style={[styles.text, buttonTextStyle]}>{title}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 5,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
  },
});
