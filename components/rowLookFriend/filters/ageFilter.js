import React from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import RangeSlider from "react-native-range-slider-expo";
import styles from "../../../styles/globalStyle";

export default function AgeFilter(props) {
  return (
    <View>
      <View style={styles.row}>
        <TextInput
          placeholder="od"
          style={{
            borderBottomColor: "#c5c5c5",
            borderBottomWidth: 1,
            width: 30,
            fontSize: 17,
          }}
          onChangeText={props.setMinAge}
        />
        <Text style={{ marginHorizontal: 7 }}>-</Text>
        <TextInput
          placeholder="do"
          style={{
            borderBottomColor: "#c5c5c5",
            borderBottomWidth: 1,
            width: 30,
            fontSize: 17,
          }}
          onChangeText={props.setMaxAge}
        />
      </View>
    </View>
  );
}
