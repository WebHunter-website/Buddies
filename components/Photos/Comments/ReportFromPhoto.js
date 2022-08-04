import React, {useState} from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import insertIntoReport from "../../Reporting/insertReport";
import styles from "../../../styles/globalStyle";

const ReportFromPhoto = (props) => {

    const [report, setReport] = useState("")
    const handleSubmit = () => {
        insertIntoReport(props.socket, props.reporter, props.profile, report, 2, props.additional)
    }
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
        placeholder="Dlaczego zgłaszasz to zdjęcie?"
      />
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={handleSubmit}
        style={[styles.secondaryButton, { width: 100, alignSelf: "center" }]}
      >
        <Text>Zgłoś</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ReportFromPhoto;
