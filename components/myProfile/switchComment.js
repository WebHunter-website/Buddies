import React, { useState, useEffect } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

export default function SwitchComment(props) {
  // FIXME: skonczyc
  const [isEnabled, setIsEnabled] = useState(props.owner.userData.comments_setting == 1);

  const toggleSwitch = (value) => {
    setIsEnabled(value);
    props.socket.emit("block your comments", props.owner.userData.email)
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
