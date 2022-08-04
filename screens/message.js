import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, Button } from "react-native";
import MessageComponent from "../components/messages/messageComponent";
import Waiter from "../components/Waiter";
import Logo from "../src/img/logo";
import styles from "../styles/globalStyle";
import Nav from "../components/nav"
import Constants from 'expo-constants';


export default function Message(props) {
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [listOfMessages, setListOfMessages] = useState([]);

  useEffect(() => {
    props.setShowNoficationDot(false)
  }, []);

  return (
    <View style={[styles.container, {marginTop: Constants.statusBarHeight}]}>
      <Nav />
      <Waiter visible={loadingMessages} />
      <MessageComponent
        owner={props.owner}
        setLoadingMessages={setLoadingMessages}
        setListOfMessages={setListOfMessages}
        listOfMessages={listOfMessages}
        navigation={props.navigation}
        socket={props.socket}
      />
    </View>
  );
}
