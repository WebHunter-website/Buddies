import React, { useState } from "react";
import { View, TextInput, Button, Dimensions, TouchableOpacity, Text } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import styles from "../../styles/globalStyle";



export default function ShortDescModal(props) {
  const [newDesc, setnewDesc] = useState("");
  


  const handleUpdate = () => {
    if (newDesc.length > 101){
      alert("Opis może zawierać maksymalnie 100 znaków")
    } else {
      props.owner
        .updateShortDesc(newDesc)
        .then((resolve) => {
          if (resolve) {
            props.setShortDesc(newDesc);
          } else {
            alert("coś poszło nie tak");
          }
        });
      props.setVisible(false);
    }
  };

  if (!props.visible) {
    return null;
  }

  return (
    <View style={[{ width: 200, height: 200, backgroundColor: "white" }, styles.container]}>
      <TextInput
        placeholder="zmień opis"
        onChangeText={setnewDesc}
        style={{
          height: 40,
          width: 230,
          borderBottomColor: "#c5c5c5",
          borderBottomWidth: 1,
          marginBottom: 10,
        }}
      ></TextInput>
      <TouchableOpacity style={styles.secondaryButton} title="potwierdź" onPress={handleUpdate}>
       <Text> potwierdź </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton} title="wróć" onPress={() => props.setVisible(false)}>
      <Text>  wyjdź </Text>
      </TouchableOpacity>
    </View>
  );
}
