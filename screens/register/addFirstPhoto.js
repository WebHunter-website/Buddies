import { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "../../styles/globalStyle";

function MyimagePicker(props) {
  const [values, setValues] = useState(props.route.params.values);
  const [pickedImagePath, setPickedImagePath] = useState('');


  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({base64: true});
    saveResult(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({base64: true});
    saveResult(result);
  };

  const saveResult = (result) => {
    if (!result.cancelled) {
      setValues((prev) => {
        prev.photo = "data:image/jpeg;base64," + result.base64;
        return prev;
      });
      console.log(`Image loaded: ${result.base64.substring(0, 100)}`);
    }
  };

  const handleSubmit = () => {
    props.navigation.navigate("AddLocation", { values: values });
  };

  return (
    <View style={style.screen}>
      <Text>Dodaj swoje zdjecie profilowe</Text>
      <Text style={[styles.thirdText, {marginVertical: 20, fontSize: 20}]}> Krok 3/4</Text>
      <View style={style.buttonContainer}>
        <TouchableOpacity
          onPress={showImagePicker}
          style={styles.secondaryButton}>
            <Text>Dodaj zdjęcie</Text>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={openCamera} 
          style={styles.secondaryButton}>
            <Text>Otwórz kamerę</Text>
         </TouchableOpacity>
      </View>

      {/* <View style={styles.imageContainer}>
      <Image key={values.photo} source={{ uri: values.photo, cache: 'reload', headers: {Pragma: "no-cache"} }} style={styles.image} />
      </View> */}

      <View style={style.imageContainer}>
        {
          pickedImagePath !== '' &&  <Image
            source={{ uri: pickedImagePath }}
            style={style.image}
          />
        }

      {/* <TouchableOpacity style={styles.secondaryButton} onPress={handleSubmit} title="dodaj lokalizację"/>
       */}
      <TouchableOpacity
      onPress={handleSubmit}
      style={styles.secondaryButton}
    >
      <Text>Dodaj lokalizacje</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}

export default MyimagePicker;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
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

