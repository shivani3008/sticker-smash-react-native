import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import placeholderImage from "./assets/images/background-image.png";
import ImageViewer from "./components/common/ImageViewer";
import Button, { buttonType } from "./components/pattern/Button";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useRef, useState } from "react";
import Options from "./components/common/Options";
import EmojiPicker from "./components/common/EmojiPicker";
import EmojiList from "./components/common/EmojiList";
import EmojiSticker from "./components/common/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import domToImage from "dom-to-image";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();

  if (status === null) {
    requestPermission();
  }

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

  const onSaveImageAsync = async () => {
    if (Platform.OS === "web") {
      try {
        const dataUrl = await domToImage.toPng(imageRef.current, {
          quality: 0.5,
          width: 320,
          height: 440,
        });

        const link = document.createElement("a");
        link.download = "sticker-smash.png";
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);

        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            placeholderImageSource={placeholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji ? (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          ) : null}
        </View>
      </View>
      {showAppOptions ? (
        <Options
          onReset={onReset}
          onAddSticker={() => setIsModalVisible(true)}
          onSaveImageAsync={onSaveImageAsync}
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
    </GestureHandlerRootView>
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
