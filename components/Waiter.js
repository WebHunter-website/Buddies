import React, {useState, useEffect} from 'react';
import {View, Dimensions, ActivityIndicator} from 'react-native';

export default function Waiter(props) {
  const {style = {}} = props;

  return (
    props.visible && (
      <View
        style={[
          {
            position: 'absolute',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: 'white',
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          },
          style,
        ]}>
        <ActivityIndicator size="large" color="black" />
      </View>
    )
  );
}
