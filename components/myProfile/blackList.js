import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import BlockedUser from "./blockedUser";
import Waiter from "../Waiter";
import styles from "../../styles/globalStyle";

const BlackList = (props) => {
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const socket = props.socket;

  useEffect(() => {
    props.socket.emit("Show black list", props.owner.userData.email, (res) => {
      setBlockedUsers(res);
      setLoading(false);
      console.log("czzarna lista" + blockedUsers);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.thirdText, { marginTop: 10, fontSize: 25 }]}>
        Czarna Lista
      </Text>
      <Waiter visible={loading} />
      {!loading && blockedUsers.length === 0 && (
        <Text>Brak użytkowników na liście</Text>
      )}
      <FlatList
        data={blockedUsers}
        renderItem={(props) => (
          <BlockedUser
            {...props}
            socket={socket}
            setBlockedUsers={setBlockedUsers}
          />
        )}
        key={(item) => "Black-list-user-" + item.email}
      />
    </View>
  );
};

export default BlackList;
