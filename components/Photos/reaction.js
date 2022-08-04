import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import styles from "../../styles/globalStyle";

export default function Reaction(props) {
  const reactionImg = require("../../src/img/hand.png");
  const colorReactionImg = require("../../src/img/hand(1).png");
  const [numberOfTounts, setnumberOfTounts] = useState("");

  useEffect(() => {
    props.socket.emit("count reacts", props.photoid, (results) => {
      console.log("results ");
      console.log(results.result[0].count);
      setnumberOfTounts(results.result[0].count)
    })
  }, []);

  return (
    <View style={styles.row}>
      {props.reaction ? (
        <TouchableOpacity onPress={props.handleReactionDelete}>
          <Image style={{ width: 30, height: 30 }} source={colorReactionImg} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.handleReactionAdd}>
          <Image style={{ width: 30, height: 30 }} source={reactionImg} />
        </TouchableOpacity>
      )}
      <Text style={{marginLeft: 5}}>{numberOfTounts}</Text>
    </View>
  );
}
