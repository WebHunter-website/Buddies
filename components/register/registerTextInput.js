import React from "react";
import { TextInput } from "react-native";
import styles from "../../styles/globalStyle";

export default function RegisterTextInput(props) {
  return (
    <TextInput
      onChangeText={props.handleChange(props.name)}
      onBlur={props.handleBlur(props.name)}
      value={props.value}
      style={styles.register_input}
      placeholder={props.placeholder}
      email={props.email}
      secureTextEntry={props.secureTextEntry}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
      onTextChange={props.onTextChange}
      defaultValue={props.defaultValue}
    />
  );
}
