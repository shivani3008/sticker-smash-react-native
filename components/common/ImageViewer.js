import { StyleSheet, Image } from "react-native";

const ImageViewer = ({ placeholderImageSource, selectedImage }) => (
  <Image
    source={selectedImage ? { uri: selectedImage } : placeholderImageSource}
    style={styles.image}
  />
);

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
