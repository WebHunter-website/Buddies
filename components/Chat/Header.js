import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modalchat from "./ModalChat";
import styles from "../../styles/globalStyle";

const Header = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <View
      style={[
        styles.row,
        {
          height: modalOpen ? 250 : 50,
          position: "relative",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text style={{ fontSize: 20 }}>{props.name}</Text>
      <TouchableOpacity onPress={setModalOpen} style={{padding: 10, position: "absolute", right: 20 }}>
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
      {modalOpen && (
          <Modalchat 
          setModalOpen= {setModalOpen}
          socket={props.socket}
          reporter={props.reporter}
          profile={props.profile}
          navigation={props.navigation}
          owner={props.owner}
          user={props.user}
          />
      )}
    </View>
  );
};

export default Header;
