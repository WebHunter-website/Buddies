import React from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "../../../styles/globalStyle";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export default function SexFilters(props) {
  return (
    <View>
      <RadioButtonGroup
        containerStyle={{ marginBottom: 10 }}
        selected={props.sexFilter}
        onSelected={(value) => props.setSexFilter(value)}
        radioBackground="#bada55"
      >
        <RadioButtonItem value={0} label="Kobiety" />
        <RadioButtonItem value={1} label="Mężczyźni" />
        <RadioButtonItem value={null} label="Bez Filtra" selected />
      </RadioButtonGroup>
    </View>
  );
}
