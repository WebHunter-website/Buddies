import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import insertIntoReport from "../../Reporting/insertReport";
import styles from "../../../styles/globalStyle";

const ReportFromComment = (props) => {
  const [report, setReport] = useState("");

  const handleSubmit = () => {
    insertIntoReport(
      props.socket,
      props.reporter,
      props.profile,
      report,
      1,
      props.additionalId
    );
    setReport("");
    props.setModalOpen(false)
  };

  return (
    <View style={{ padding: 10, borderColor: "black", borderWidth: 1 }}>
      <TextInput
        onChangeText={setReport}
        style={{
          width: 220,
          height: 60,
          borderWidth: 1,
          borderColor: "#c5c5c5",
          alignSelf: "center",
          paddingLeft: 10,
        }}
        placeholder="Dlaczego zgłaszasz ten komentarz?"
      />
      <TouchableOpacity style={styles.secondaryButton} onPress={handleSubmit} style={[styles.secondaryButton, {width: 100, alignSelf: "center"}]}>
        <Text>Zgłoś</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportFromComment;
