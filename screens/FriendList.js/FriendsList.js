import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, Dimensions } from "react-native";
import styles from "../../styles/globalStyle";
import FriendCart from "./FriendCart";
import { getFilledArray } from "../../src/helpers";
import { useFocusEffect } from "@react-navigation/native";
import getAge from "../../components/rowLookFriend/countAge";
import Logo from "../../src/img/logo"
import Nav from "../../components/nav";
import Waiter from "../../components/Waiter";

export default function FriendsList(props) {
  const [friendsList, setFriendsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      console.log("Render friends list");
      props.owner.fetchFriendsList().then((newFriendsList) => {
        newFriendsList.forEach((friendData) => {
          friendData.age = getAge(friendData.age);
        });
        setFriendsList(newFriendsList);
        setIsLoading(true)
      });
    }, [])
  );

  return (
    <View style={styles.container}>
      <Waiter visible={!isLoading}/>
      <Nav />
      <Text style={[styles.thirdText, { marginTop: 10, fontSize: 25 }]}>
        Lista znajomych
      </Text>
      <ScrollView>
        {friendsList.map((_, index) => {
          return (
            <FriendCart
              userData={props.owner}
              friendsList={friendsList}
              setFriendsList={setFriendsList}
              key={`FriendCart-${index}`}
              index={index}
              navigation={props.navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
