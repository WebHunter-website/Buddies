import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Modalreport from "../Reporting/modalReport";
import styles from "../../styles/globalStyle";

const StrangerMenu = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalReportVisible, setModalReportVisible] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleSubmit = () => {
    props.socket.emit(
      "insert to black list",
      props.userId,
      props.ownerId,
      (status) => {
        if (status) {
          alert(
            "użytkownik został poprawnie dodany do czarnej listy (podgląd listy znajduje się w profilu)"
          );
        } else {
          alert("wystąpił błąd, spróbuj ponownie");
        }
      }
    );
  };

  return (
    <View style={{ position: "relative" }}>
      <TouchableOpacity
        style={{
          marginLeft: "auto",
          marginRight: 15,
          marginBottom: 50,
          padding: 10,
          position: "absolute",
          left: 100,
        }}
        onPress={handleClick}
      >
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 50,
            backgroundColor: "#bada55",
          }}
        ></View>
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 50,
            backgroundColor: "#bada55",
            marginVertical: 5,
          }}
        ></View>
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 50,
            backgroundColor: "#bada55",
          }}
        ></View>
      </TouchableOpacity>
      <View>
        {modalOpen && (
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              padding: 20,
              position: "absolute",
              zIndex: 2,
              left: -120,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              onPress={() => setModalReportVisible(true)}
              style={styles.secondaryButton}
            >
              <Text>Zgłoś</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.secondaryButton}
            >
              <Text>dodaj do czarnej listy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalOpen(false)}
              style={styles.secondaryButton}
            >
              <Text>Zamknij</Text>
            </TouchableOpacity>
          </View>
        )}
      <Modalreport
        visible={modalReportVisible}
        setVisible={setModalReportVisible}
        socket={props.socket}
        userId={props.userId}
        ownerId={props.ownerId}
      />
      </View>
    </View>
  );
};

export default StrangerMenu;
