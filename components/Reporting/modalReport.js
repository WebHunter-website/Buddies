import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import insertIntoReport from "./insertReport";
import styles from "../../styles/globalStyle";

const ModalReport = (props) => {
  const [report, setReport] = useState("");

  const handleSubmit = () => {
    insertIntoReport(props.socket, props.ownerId, props.userId, report, 0);
    props.setVisible(false);
  };

  return (
    props.visible && (
      <View
        style={[
          styles.column,
          {
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            zIndex: 10,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            left: -100,
          },
        ]}
      >
        <Text>Z jakiego powodu zgłaszasz użytkownika?</Text>
        <TextInput
          onChangeText={setReport}
          placeholder="podaj powód"
          style={{
            width: 200,
            height: 60,
            borderWidth: 1,
            borderColor: "#c5c5c5",
            alignSelf: "center",
            paddingLeft: 10,
          }}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={[
            styles.secondaryButton,
            {
              width: 120,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Text>Zgłoś</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setVisible(false)}
          style={[
            styles.secondaryButton,
            {
              width: 120,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Text>Zamknij</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default ModalReport;
