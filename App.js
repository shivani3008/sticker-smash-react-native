import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import placeholderImage from "./assets/images/background-image.png";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useState } from "react";

export default function App() {
  const [selectedImage, setSelectedImage] = useState();

  const pickImageAsync = async () => {
    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]?.uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          icon="picture-o"
          type="primary"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
