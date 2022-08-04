import React, {useState, useEffect} from 'react';
import Checkbox from 'expo-checkbox';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from '../../styles/globalStyle';
import * as WebBrowser from 'expo-web-browser';

export default function CheckBoxComponent(props) {
  const handleChange = () => {
    props.setChecked(true);
    console.log(props.isChecked);
  };

  return (
    <View style={[styles.column, {justifyContent: "center", alignItems: "center"}]}>
      <Checkbox
        style={{margin: 8}}
        value={props.isChecked}
        onValueChange={props.setChecked}
        // color={props.isChecked ? '#BDA55' : undefined}
        // onChange={handleChange}
      />
      <View style={{width: Dimensions.get("window").width, justifyContent: "center", alignItems: "center"}}>
        <Text style={{marginRight: 10}}>Akceptuję</Text>
        <TouchableOpacity
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'http://host716050.xce.pl/regulamin_aplikacji',
            );
          }}>
          <Text style={{color: 'blue'}}>regulamin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'http://host716050.xce.pl/polityka_prywatnosci',
            );
          }}>
          <Text style={{color: 'blue'}}>politykę prywatności</Text>
        </TouchableOpacity>
        <Text> oraz </Text>
        <TouchableOpacity
          onPress={() => {
            WebBrowser.openBrowserAsync('http://host716050.xce.pl/rodo');
          }}>
          <Text style={{color: 'blue'}}>RODO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
