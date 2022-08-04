import React, { useState } from "react";
import { View, TextInput, Button, Dimensions, Text, TouchableOpacity } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import styles from "../../styles/globalStyle";



export default function LongDesc(props) {
  const [newDesc, setnewDesc] = useState("");
  
  
  const handleUpdate = () => {
    if (newDesc.length > 351) {
      alert("Opis może zawierać maksymalnie 350 znaków")
    } else {
      props.owner
        .updateLongDesc(newDesc)
        .then((resolve) => {
          if (resolve) {
            props.setLongDesc(newDesc);
          } else {
            alert("coś poszło nie tak");
          }
        });
    }
  };


  return (
    <View style={[{ width: Dimensions.get("window").width, backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center" }]}>
      <Text style={{lineHeight: 18, marginTop: 25}}>{props.longDesc}</Text>
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
      <TouchableOpacity style={[styles.secondaryButton, {marginBottom: 20}]} title="wróć" onPress={() => props.setVisible(false)}>
       <Text> wyjdź </Text>
      </TouchableOpacity>
    </View>
  );
}