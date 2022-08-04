import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import reactionsFetch from './reactionsFetch';
import addReactionFetch from './addReactionFetch';
import deleteReactionFetch from './deleteRactionFetch';
import AddComments from './Comments/addComments';
import ShowComments from './Comments/showComment';
import Reaction from './reaction';
import ReportFromPhoto from './Comments/ReportFromPhoto';
import styles from '../../styles/globalStyle';

export default function PhotoCard(props) {
  const [reactions, setReactions] = useState([]);
  const [ownerReacted, setOwnerReacted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    reactionsFetch(props.owner.userData.email, props.photoData.photoid).then(
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
    addReactionFetch(props.owner.userData.email, props.photoData.photoid);
  };

  const handleReactionDelete = () => {
    setOwnerReacted(false);
    deleteReactionFetch(props.owner.userData.email, props.photoData.photoid);
  };

  return (
    <View key={`PhotoGalleryImage-${props.photoData.photoid}`}>
      <Image
        source={{uri: props.photoData.photo}}
        style={{
          width: (Dimensions.get('window').width * 3.5) / 4,
          height: (Dimensions.get('window').width * 3.5) / 4,
          marginTop: 10,
        }}
      />
      <Text>{props.photoData.date.substring(0, 10)}</Text>
      <View style={styles.row}>
        <Reaction
          handleReactionAdd={handleReactionAdd}
          handleReactionDelete={handleReactionDelete}
          reaction={ownerReacted}
          socket={props.socket}
          photoid={props.photoData.photoid}
        />
        <TouchableOpacity
          onPress={() => setModalOpen(true)}
          style={{marginLeft: 'auto'}}>
          <Text>Zgłoś</Text>
        </TouchableOpacity>
        {modalOpen && (
          <ReportFromPhoto
            socket={props.socket}
            reporter={props.owner.userData.email}
            profile={props.user.email}
            additional={props.photoData.photoid}
          />
        )}
      </View>
      <ShowComments
        photoid={props.photoData.photoid}
        user={props.user}
        owner={props.owner}
        socket={props.socket}
        navigation={props.navigation}
      />
      {/* <AddComments owner={props.owner} photo={props.photoData} />  */}
    </View>
  );
}
