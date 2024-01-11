import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import placeholderImage from "./assets/images/background-image.png";
import ImageViewer from "./components/common/ImageViewer";
import Button, { buttonType } from "./components/pattern/Button";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useState } from "react";
import Options from "./components/common/Options";
import EmojiPicker from "./components/common/EmojiPicker";
import EmojiList from "./components/common/EmojiList";
import EmojiSticker from "./components/common/EmojiSticker";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImageAsync = async () => {
    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]?.uri);
      setShowAppOptions(true);
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onSelectEmoji = (value) => {
    setPickedEmoji(value);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji ? (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        ) : null}
      </View>
      {showAppOptions ? (
        <Options
          onReset={onReset}
          onAddSticker={() => setIsModalVisible(true)}
        />
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a photo"
            icon="image"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            type={buttonType.GHOST}
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <EmojiList onSelect={onSelectEmoji} />
      </EmojiPicker>
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
