import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/globalStyle";

const BlockedUser = (props) => {

  let item = props.item;

  const handleSubmit = () => {
    props.socket.emit("delete from black list", item.blockid, () => {
      props.setBlockedUsers((prev) =>
        prev.filter((e) => e.blockid != item.blockid)
      );
      alert("usunięto z czarnej listy");
    });
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomWidth: 1,
          borderColor: "black",
          flexDirection: "row",
          width: Dimensions.get("window").width,
          justifyContent: "flex-start",
        },
      ]}
    >
      <Image
        source={{ uri: item.photo }}
        style={{ width: 90, height: 90, alignSelf: "flex-start" }}
      />
      <Text>{item.name}</Text>
      <TouchableOpacity
        onPress={handleSubmit}
        style={{ alignSelf: "center", marginLeft: "auto", paddingRight: 30 }}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../src/img/delete.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BlockedUser;
