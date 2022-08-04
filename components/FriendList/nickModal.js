import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";
import styles from "../../styles/globalStyle";

export default function NickModal(props) {
  const [newNick, setnewNick] = useState("");

  const handleUpdate = () => {
    console.log(`Owner: ${props.owner}`);
    console.log(`friendsList[${props.index}]: ${props.friendsList[props.index]}`);
    props.owner
      .updateNick(props.friendsList[props.index].email, newNick)
      .then((resolve) => {
        if (resolve) {
          props.setFriendsList((prev) => {
            prev[props.index].nick = newNick;
            alert("nick został zakutalizowany");
            return prev;
          });
        } else {
          alert("coś poszło nie tak");
        }
      });
  };

  if (!props.visible) {
    return null;
  }

  return (
    <View
      style={{
        width: 180,
        height: 150,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        zIndex: 4,
        position: "absolute",
      }}
    >
      <TextInput
        placeholder="zmień nick"
        onChangeText={setnewNick}
        style={{ height: 40 }}
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
