import React, {useState} from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import updateEmail from "./Fetch/updateEmailFetch";
import styles from "../../styles/globalStyle";

const UpdateEmail = (props) => {
    const [newEmail, setNewEmail] = useState("");
    
    const handleUpdate = () => {
        updateEmail(newEmail, props.owner.userData.email)
    }

  return (
    <View style={[styles.column, {alignItems: "center"}]}>
      <TextInput onChangeText={setNewEmail} placeholder={"wpisz nowy e-mail"} style={styles.register_input} />
      <TouchableOpacity style={styles.secondaryButton} onPress={handleUpdate}>
        <Text>Potwierdź</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateEmail;
