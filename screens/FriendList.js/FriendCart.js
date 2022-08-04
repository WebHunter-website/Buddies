import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../styles/globalStyle";
import ModalBurger from "../../components/FriendList/modalBurger";
import { getFilledArray } from "../../src/helpers";

export default function FriendCart(props) {
  // console.log({...props.friendsList[props.index], photo: ""});
  const statusIcon = require("../../src/img/online.png");
  const redIcon = require("../../src/img/online(2).png");
  const [modal, setmodal] = useState(false);

  const handleClick = () => {
    setmodal(true);
  };

  return (
    <SafeAreaView
      style={[
        styles.row,
        {
          width: Dimensions.get("window").width,
          borderWidth: 1,
          borderColor: "#c5c5c5",
          position: "relative",
          overflow: "visible",
          paddingTop: -25,
        },
      ]}
    >
      <Image
        source={{ uri: props.friendsList[props.index].photo }}
        style={{ width: 100, height: 100, paddingBottom: -50 }}
      />
      <View style={{ paddingLeft: 10 }}>
        <View style={styles.row}>
          {props.friendsList[props.index].type === 1 ? (
            <Image
              style={{
                width: 25,
                height: 25,
                paddingLeft: 10,
                paddingTop: -10,
              }}
              source={statusIcon}
            />
          ) : (
            <Image
              style={{
                width: 25,
                height: 25,
                paddingLeft: 10,
                paddingTop: -10,
              }}
              source={redIcon}
            />
          )}
          <Text
            style={[
              styles.thirdText,
              { fontSize: 20, paddingTop: -10, paddingLeft: 5 },
            ]}
          >
            {props.friendsList[props.index].status_label}
          </Text>
        </View>
        {props.friendsList[props.index].nick === "" ? (
          <Text
            style={[
              styles.secondaryText,
              { fontSize: 25, paddingVertical: 10 },
            ]}
          >
            {props.friendsList[props.index].name}
          </Text>
        ) : (
          <Text
            style={[
              styles.secondaryText,
              { fontSize: 25, paddingVertical: 10 },
            ]}
          >
            {props.friendsList[props.index].nick}
          </Text>
        )}
        <Text style={{ fontFamily: "roboto", color: "#616161", width: "60%" }}>
          {props.friendsList[props.index].shortdesc}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginLeft: "auto",
          marginRight: 15,
          marginBottom: 50,
          padding: 10,
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
      <ModalBurger
        visible={modal}
        setVisible={setmodal}
        owner={props.userData}
        friendsList={props.friendsList}
        setFriendsList={props.setFriendsList}
        index={props.index}
        navigation={props.navigation}
      />
    </SafeAreaView>
  );
}

// export default function FriendCartSkeleton(props) {
//   const [blinkElement, setblinkElement] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setblinkElement((prev) => !prev);
//     }, 500);
//   }, [blinkElement]);

//   const fakeFriendData = {
//     name: blinkElement ? (
//       <View
//         style={{
//           width: 100,
//           height: 20,
//           borderRadius: 5,
//           backgroundColor: "#e5e5e5",
//         }}
//       ></View>
//     ) : (
//       <View
//         style={{
//           width: 100,
//           height: 20,
//           borderRadius: 5,
//           backgroundColor: "#f5f5f5",
//         }}
//       ></View>
//     ),
//     nick: blinkElement ? (
//       <View
//         style={{
//           width: 100,
//           height: 20,
//           borderRadius: 5,
//           backgroundColor: "#e5e5e5",
//         }}
//       ></View>
//     ) : (
//       <View
//         style={{
//           width: 100,
//           height: 20,
//           borderRadius: 5,
//           backgroundColor: "#f5f5f5",
//         }}
//       ></View>
//     ),
//     shortdesc: blinkElement ? (
//       <View
//         style={{
//           width: 100,
//           height: 20,
//           borderRadius: 5,
//           backgroundColor: "#e5e5e5",
//         }}
//       ></View>
//     ) : (
//       <View
//         style={{
//           width: 100,
//           height: 20,
//           borderRadius: 5,
//           backgroundColor: "#f5f5f5",
//         }}
//       ></View>
//     ),
//   };

//   const skeletonProps = {
//     ...props,
//     friendsList: getFilledArray(fakeFriendData, props.friendsList.length),
//   };

//   return !props.friendsList[props.index]
//     ? FriendCart(skeletonProps)
//     : FriendCart(props);
// }
