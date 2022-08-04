import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {USER} from '../../src/user';
import photoGalleryFetch from '../Photos/photoFetch';
import addReactionFetch from '../Photos/addReactionFetch';
import AddComments from '../Photos/Comments/addComments';
import ShowComments from '../Photos/Comments/showComment';
import Reaction from '../Photos/reaction';
import reactionsFetch from '../Photos/reactionsFetch';
import DeletePhoto from './deletePhoto';
import styles from '../../styles/globalStyle';

export default function PhotoGallery(props) {
  const reaction = require('../../src/img/hand.png');

  const [reactions, setReactions] = useState([]);
  const [ownerReacted, setOwnerReacted] = useState(false);
  const [newPhoto, setNewPhoto] = useState('');

  useEffect(() => {
    reactionsFetch(props.owner.userData.email, props.photo.photoid).then(
      data => {
        console.log('Reactions:');
        console.log(data.result);
        setReactions(data.result);
        data.result.forEach(reaction => {
          if (reaction.userid === props.owner.userData.email) {
            setOwnerReacted(true);
            console.log('***** Owner has reacred *****');
          }
        });
      },
      reject => {
        console.warn(reject);
      },
    );
  }, []);

  const handleReactionAdd = () => {
    setOwnerReacted(true);
    addReactionFetch(props.owner.userData.email, props.photo.photoid);
    console.log('user' + props.userData);
  };

  const handleReactionDelete = () => {
    setOwnerReacted(false);
    deleteReactionFetch(props.owner.userData.email, props.photo.photoid);
    console.log('owner' + props.owner.userData.email);
  };

  useEffect(() => {
    console.log('Rendering image ' + props.index);
    console.log('Photo length ' + props.photo.photo.length);
  }, []);

  return (
    <View>
      <View
      // style={{flex: 1}}>
      >
        <Image
          source={{uri: props.photo.photo}}
          style={{
            width: (Dimensions.get('window').width * 3.5) / 4,
            height: (Dimensions.get('window').width * 3.5) / 4,
            marginTop: 50,
          }}
        />
        <Text>{props.photo.date.substring(0, 10)}</Text>
      </View>
      <View style={styles.row}>
        <Reaction
          handleReactionAdd={handleReactionAdd}
          handleReactionDelete={handleReactionDelete}
          reaction={ownerReacted}
          socket={props.socket}
        />
        <DeletePhoto
          photoid={props.photo.photoid}
          setPhotoData={props.setphotoData}
        />
      </View>
      <ShowComments
        photoid={props.photo.photoid}
        owner={props.owner}
        navigation={props.navigation}
        socket={props.socket}
      />
      {/* <AddComments 
                    photoid={props.photo.photoid}
                    owner={props.owner}
                /> */}
    </View>
  );
}
