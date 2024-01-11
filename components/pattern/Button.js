import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const buttonType = {
  PRIMARY: "PRIMARY",
  GHOST: "GHOST",
};

const Button = ({
  label = "",
  icon = "",
  type = buttonType.PRIMARY,
  onPress,
}) => {
  const style = type === buttonType.PRIMARY ? primaryStyles : styles;

  return (
    <View style={style.buttonContainer}>
      <Pressable style={style.button} onPress={onPress}>
        {icon ? (
          <Ionicons
            name={icon}
            size={20}
            color="#25292e"
            style={style.buttonIcon}
          />
        ) : null}
        {label ? <Text style={style.buttonLabel}>{label}</Text> : null}
      </Pressable>
    </View>
  );
};

export default Button;

const defaultStyles = {
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: { color: "#fff", fontSize: 16 },
};

const styles = StyleSheet.create(defaultStyles);

const primaryStyles = StyleSheet.create({
  ...defaultStyles,
  buttonContainer: {
    ...defaultStyles.buttonContainer,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 18,
  },
  button: { ...defaultStyles.button, backgroundColor: "#fff" },
  buttonLabel: { ...defaultStyles.buttonLabel, color: "#25292e" },
});
