import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import style from "../styles/globalStyle";

export default function ProfileImagePicker(props) {
  const [pickedImagePath, setPickedImagePath] = useState("");

  const handleSubmit = () => {
    props.route.params.handleSubmit(pickedImagePath);
    props.route.params.setUserPhoto(pickedImagePath);
    props.route.params.navigation.goBack();
  };

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({ base64: true });

    if (!result.cancelled) {
      setPickedImagePath("data:image/jpeg;base64," + result.base64);
      console.log(`Image loaded: ${result.base64.substring(0, 100)}`);
    }
  };

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ base64: true });

    if (!result.cancelled) {
      setPickedImagePath("data:image/jpeg;base64," + result.base64);
      console.log(`Image loaded: ${result.base64.substring(0, 100)}`);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={showImagePicker} style={style.secondaryButton}>
          <Text>Dodaj zdj??cie</Text>
        </Pressable>
        <Pressable onPress={openCamera} style={style.secondaryButton}>
          <Text>Otw??rz kamer??</Text>
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        {pickedImagePath !== "" && (
          <Image source={{ uri: pickedImagePath }} style={styles.image} />
        )}
      </View>
      {pickedImagePath != "" && (
        <TouchableOpacity onPress={handleSubmit} style={style.secondaryButton}>
          <Text>Dodaj</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonContainer: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageContainer: {
    padding: 30,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: "cover",
  },
});
