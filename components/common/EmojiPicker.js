import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import IconButton from "../pattern/IconButton";

const EmojiPicker = ({ isVisible, children, onClose }) => (
  <Modal animationType="slide" transparent visible={isVisible}>
    <View style={styles.modalContent}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose a sticker</Text>
        <IconButton icon="close" onPress={onClose} type="GHOST" color="white" />
      </View>
      {children}
    </View>
  </Modal>
);

export default EmojiPicker;

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});
