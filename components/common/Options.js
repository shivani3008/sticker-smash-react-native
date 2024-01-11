import { StyleSheet, View } from "react-native";
import IconButton from "../pattern/IconButton";

const Options = ({ onReset }) => {
  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
        <IconButton
          icon="refresh"
          onPress={onReset}
          type="GHOST"
          color="white"
        />
        <IconButton icon="add" onPress={onAddSticker} />
        <IconButton
          icon="download-outline"
          onPress={onSaveImageAsync}
          type="GHOST"
          color="white"
        />
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
