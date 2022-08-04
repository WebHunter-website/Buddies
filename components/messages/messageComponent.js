import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import selectMessages from './messageFetch';
import coresponders from './corespondersFetch';
import RowCorespond from './rowCorespond';
import {FlatList} from 'react-native-gesture-handler';
import Waiter from '../Waiter';

const MessageComponent = props => {
  
  useEffect(() => {
    props.setLoadingMessages(true);
    coresponders(props.owner.userData.email).then(data => {
      props.setListOfMessages(data);
      props.setLoadingMessages(false);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={props.listOfMessages.map((message, index) => ({
          message: message,
          navigation: props.navigation,
          owner: props.owner,
          socket: props.socket,
          index: index
        }))}
        renderItem={_props => (
          <RowCorespond
            {..._props}
            setListOfMessages={props.setListOfMessages}
          />
        )}
      />
    </View>
  );
};

export default MessageComponent;
