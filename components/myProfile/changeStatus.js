import React, { useState, useEffect } from "react";
import {
    Text,
    View, TouchableOpacity, StyleSheet, Button, TouchableOpacityBase  } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import setStatus from "../register/fetchStatus"
import styles from "../../styles/globalStyle";


export default function ChangeStatus(props) {
  const [statusList, setstatusList] = useState([]);
  const [modal, setmodal] = useState(false);
  const [setSttus, setsetSttus] = useState("");

  useEffect(() => {
    setStatus().then(
      (data) => {
        setstatusList(data.result.map(e => {return {label: e.status, value: e.statusid}}));
      },
      (reject) => {
        console.warn(reject);
      }
    );
  }, []);

   
  const handleModalOpen = () => {
    setmodal(true);
}

    const handleStatusSubmit = () => {
        props.owner
        .updateStatus(setSttus)
        .then((resolve) => {
          if (resolve) {
            props.setsetNewStatus(statusList.filter(e => e.value === setSttus)[0].label);
          } else {
            alert("coś poszło nie tak");
          }
        });
    }

    return (
        <View style={styles.column}>
            <TouchableOpacity onPress={handleModalOpen} style={[styles.secondaryButton, {paddingHorizontal: 10, paddingVertical: 5, marginLeft: 20}]}>
                <Text>Edytuj</Text>
            </TouchableOpacity>
            {modal ? (
                <View style={{width: 200, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <RNPickerSelect
                        value={setSttus}
                        style={pickerSelectStyles.inputAndroid}
                        onValueChange={(value) => setsetSttus(value)}
                        items={statusList}
                        placeholder={{ label: "Wybież status", value: null }}
                        style={{ inputAndroid: { color: "black" } }}
                    />
                    {/* <Button title="submit" onPress={handleStatusSubmit}>SUBMIT</Button> */}
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.secondaryButton}  title="submit" onPress={handleStatusSubmit}><Text>Potwierdź</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryButton}  title="submit" onPress={() => setmodal(false)}><Text>Zamknij</Text></TouchableOpacity>
                    </View>
                  </View>
            ) : null
        }
        </View>
    )
}


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "#bada55",
      borderRadius: 4,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      width: 300,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: "#bada55",
      borderRadius: 8,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  