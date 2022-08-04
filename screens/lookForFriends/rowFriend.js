import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/globalStyle";
// import { USER } from "../../src/user";

export default function rowFriendElement(props) {
  const statusIcon = require("../../src/img/online.png");
  const redIcon = require("../../src/img/online(2).png")
  const location = require("../../src/img/localpin.png")
  // const [owner, setOwner] = useState(USER);

  // useEffect(() => {
  //   console.log("Owner = ");
  //   console.log(owner);
  // }, []);
  return (
    <TouchableOpacity
      style={style.item}
      onPress={() => {
        console.log(props.item.owner.userData.email);
        props.item.navigation.navigate("StrangerProfile", {
          user: props.item.friendData,
          owner: props.item.owner,
        });
      }}
    >
      <Image
        source={{ uri: props.item.friendData.photo }}
        style={[style.img, {marginBottom: -40}]}
        resizeMode={"cover"}
      />
      <View>
        <View style={styles.row}>

          {props.item.friendData.status_type === 1 ? (
            <Image
            source={statusIcon}
            style={{ width: 25, height: 25, marginRight: 10}}
          />
          ) : (
            <Image
            source={redIcon}
            style={{ width: 25, height: 25, marginRight: 10}}
          />
          )}
          <Text style={[styles.thirdText, { fontSize: 20, paddingTop: -10 }]}>
            {props.item.friendData.status_label}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.secondaryText, { fontSize: 25 }]}>
            {props.item.friendData.name},
          </Text>
          <Text
            style={[
              styles.thirdText,
              { paddingTop: -10, paddingLeft: 10, fontSize: 20 },
            ]}
          >
            {props.item.friendData.age}l.
          </Text>
        </View>
        {/* <Text style={styles.thirdText}>Status: {props.item.friendData.status}</Text> */}
        <Text style={[styles.thirdText, { fontSize: 20 }]}>
          <Image source={location} style={{width: 20, height: 20}}/>
          {props.item.owner
            .getDistanceToPoint(
              props.item.friendData.location.x,
              props.item.friendData.location.y
            )
            .toFixed(2)}{" "}
          km
        </Text>
      </View>
    </TouchableOpacity>
  );
}

// export default function RowFriend(props) {
//   const [blinkElement, setblinkElement] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setblinkElement((prev) => !prev);
//     }, 500);
//   }, [blinkElement]);

//   const skeletonProps = {
//     ...props,
//     friendData: {
//       name: blinkElement ? (
//         <View
//           style={{
//             width: 100,
//             height: 20,
//             borderRadius: 5,
//             backgroundColor: "#e5e5e5",
//           }}
//         ></View>
//       ) : (
//         <View
//           style={{
//             width: 100,
//             height: 20,
//             borderRadius: 5,
//             backgroundColor: "#f5f5f5",
//           }}
//         ></View>
//       ),
//       age: blinkElement ? (
//         <View
//           style={{
//             width: 70,
//             height: 20,
//             borderRadius: 5,
//             backgroundColor: "#e5e5e5",
//           }}
//         ></View>
//       ) : (
//         <View
//           style={{
//             width: 100,
//             height: 20,
//             borderRadius: 5,
//             backgroundColor: "#f5f5f5",
//           }}
//         ></View>
//       ),

//       location: {
//         x: 0,
//         y: 0,
//       },

//       // photo: blinkElement && (
//       //   <Image
//       //     source={require("../../src/img/Image.png")}
//       //     style={style.img}
//       //   ></Image>
//       // ) 
//     },
//   };

//   return !props.friendData
//     ? rowFriendElement(skeletonProps)
//     : rowFriendElement(props);
//   // console.log(props.friendData.status_label)
// }

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    width: Dimensions.get("window").width,
    marginTop: 20,
    borderColor: "#c5c5c5",
    borderWidth: 1,

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.20,
    // shadowRadius: 1.41,
    
    // elevation: 2,
  },

  img: {
    width: 100,
    height: 104,
    marginRight: 20,
  },
});

const hex = StyleSheet.create({
  hexagon: {
    width: 100,
    height: 55,
  },
  hexagonInner: {
    width: 100,
    height: 55,
    backgroundColor: "red",
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderLeftColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    borderTopWidth: 25,
    borderTopColor: "red",
  },
  hexagonBefore: {
    position: "absolute",
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderLeftColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    borderBottomWidth: 25,
    borderBottomColor: "red",
  },
});
