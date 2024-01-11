import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const buttonType = {
  PRIMARY: "PRIMARY",
  GHOST: "GHOST",
};

const IconButton = ({
  icon,
  type = buttonType.PRIMARY,
  onPress,
  color = "#25292e",
}) => {
  const style = type === buttonType.PRIMARY ? primaryStyles : ghostStyles;

  return (
    <View style={style.buttonContainer}>
      <Pressable style={style.button} onPress={onPress}>
        <Ionicons name={icon} size={38} color={color} />
      </Pressable>
    </View>
  );
};

export default IconButton;

const primaryStyles = StyleSheet.create({
  buttonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});

const ghostStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
