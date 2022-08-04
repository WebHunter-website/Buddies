import React from "react";
import {
  View,
  Text,
  TextInput,
} from "react-native";
import styles from "../../../styles/globalStyle";

export default function DistanceFilter(props) {
    return (
        <View style={styles.row}>
                <TextInput placeholder="od" 
                style={{borderBottomColor: "#c5c5c5", borderBottomWidth: 1, width: 30, fontSize: 17}}
                onChangeText={props.setdistanceFilterFrom}/>
                <Text style={{marginHorizontal: 7}}>-</Text>
                <TextInput placeholder="do" 
                style={{borderBottomColor: "#c5c5c5", borderBottomWidth: 1, width: 30, fontSize: 17}}
                onChangeText={props.setdistanceFilterTo}/>
        </View>
    )
}