import React, { useState, useEffect } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import {updateLocationPermissionFetch} from "./Fetch/constLocationFetch"

export default function SwitchLocation(props) {
  const [isEnabled, setIsEnabled] = useState(false);


  const toggleSwitch = (value) => {
    // props.setInfoModal(true)
    alert("Twoja przybliżona lokalizacja jest udostępniana innym użytkownikom w postaci przybliżonej odległości. Dokładne dane geolokalizacyjne nie są usdostępniane")
    setIsEnabled(value);
    console.log(props.email);
    updateLocationPermissionFetch(props.email, value)
    props.setAllowLocationUpdate(true)
  };

  return (
    <View>
      <Switch
        trackColor={isEnabled ? "#BADA55" : "#c5c5c5"}
        thumbColor={isEnabled ? "#BADA55" : "#c5c5c5"}
        ios_backgroundColor="#c5c5c5"
        onValueChange={toggleSwitch}
        value={isEnabled}
      
      />
    </View>
  );
}
