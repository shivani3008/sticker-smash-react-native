import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Button = ({ label, onPress, icon, type }) => {
  const style = type === "primary" ? primaryStyles : styles;

  return (
    <View style={style.buttonContainer}>
      <Pressable style={style.button} onPress={onPress}>
        {icon ? (
          <FontAwesome
            name={icon}
            size={18}
            color="#25292e"
            style={style.buttonIcon}
          />
        ) : null}
        <Text style={style.buttonLabel}>{label}</Text>
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
