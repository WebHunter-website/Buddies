import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import SendMessage from '../../src/img/message.js';
import Add from '../../src/img/addToFriend';
import styles from '../../styles/globalStyle';
import SetPhotoToGallery from '../../components/Photos/setPhotoToGallery.js';
import Tauntcomponent from '../../components/Taunts/tauntComponent.js';
import StrangerMenu from '../../components/rowLookFriend/StrangerMenu.js';
import Nav from '../../components/nav.js';


export default function StrangerProfile(props) {

  const pin = require('../../src/img/localpin.png');

  const [isFriend, setIsFriend] = useState(true);

  useEffect(() => {
    props.socket.emit('check friend', props.route.params.owner.userData.email, props.route.params.user.email, setIsFriend);
  }, []);

  const handleAdd = () => {
    console.log(props.route.params.user);
    props.route.params.owner.addFriend(props.route.params.user);
  };

  const statusIcon = require('../../src/img/online.png');
  const redIcon = require('../../src/img/online(2).png');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Nav />
        <View style={{display: 'flex', alignItems: 'center'}}>
          <View
            style={[
              styles.row,
              {
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
              },
            ]}>
            {props.route.params.user.type === 1 ? (
              <Image
                style={{width: 30, height: 30, marginRight: 10}}
                source={statusIcon}
              />
            ) : (
              <Image
                style={{width: 30, height: 30, marginRight: 10}}
                source={redIcon}
              />
            )}
            <Text style={[styles.thirdText, {fontSize: 30, paddingTop: -10}]}>
              {props.route.params.user.status_label}
            </Text>
          </View>
          <StrangerMenu
            userId={props.route.params.user.email}
            ownerId={props.route.params.owner.userData.email}
            socket={props.socket}
          />
          <Image
            style={style.img}
            source={{uri: props.route.params.user.photo}}
          />
          <View style={styles.row}>
            <Text style={styles.secondaryText}>
              {props.route.params.user.name}
            </Text>
            <Text style={[styles.thirdText, {paddingTop: -10, paddingLeft: 8}]}>
              {props.route.params.user.age} l.
            </Text>
          </View>
          <Text style={[styles.text, styles.miniSection]}>
            {props.route.params.user.description}
          </Text>
          <View style={[styles.row, {marginBottom: 10}]}>
            <Image source={pin} style={{height: 25, width: 25}} />
            <Text style={[styles.thirdText, {fontSize: 20, paddingTop: -10}]}>
              {props.route.params.owner
                .getDistanceToPoint(
                  props.route.params.user.location.x,
                  props.route.params.user.location.y,
                )
                .toFixed(2)}{' '}
              km
            </Text>
          </View>
          <Tauntcomponent
            owner={props.route.params.owner.userData.email}
            email={props.route.params.user.email}
          />
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Chat', {
                owner: props.route.params.owner.userData,
                userWithProps: props.route.params.user,
              })
            }
            style={{paddingVertical: 20}}>
            <SendMessage />
          </TouchableOpacity>
          {!isFriend && (
            <TouchableOpacity onPress={handleAdd}>
              <Add />
            </TouchableOpacity>
          )}
          <Text style={[styles.thirdText, {marginTop: 10}]}>Zdjęcia</Text>
          <SetPhotoToGallery
            ownerEmail={props.route.params.owner.userData.email}
            user={props.route.params.user}
            avatar={props.route.params.user.photo}
            owner={props.route.params.owner}
            socket={props.socket}
            navigation={props.navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  img: {
    width: 180,
    height: 180,
  },
});
