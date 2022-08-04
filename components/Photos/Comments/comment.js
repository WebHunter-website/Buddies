import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../../../styles/globalStyle';
import ReportFromComment from './ReportfromComment';
import getAge from '../../rowLookFriend/countAge';
import DeleteComment from './deleteComment';

export default function Comment(props) {
  const [commenter, setCommenter] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (props.commenters.length === 0) {
      return;
    }

    const filteredCommenters = props.commenters.filter(element => {
      return element.email === props.comment.userid;
    });
    setCommenter(filteredCommenters[0]);
  }, []);

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            commenter.age = getAge(commenter.age)
            props.navigation.navigate('StrangerProfile', {
              user: commenter,
              owner: props.owner,
            });
          }}>
          <Image
            style={{width: 30, height: 30, marginRight: 15}}
            source={{uri: commenter.photo}}
          />
        </TouchableOpacity>
        <View style={styles.column}>
          <Text style={[styles.secondaryText, {fontSize: 15}]}>
            {commenter.name}
          </Text>
          <Text style={{fontSize: 12}}>{props.comment.comment}</Text>
        </View>
      </View>
      <View style={[styles.row, {marginLeft: 'auto'}]}>
        {props.comment.userid === props.owner.userData.email && (
          <DeleteComment
            setCommentData={props.setCommentData}
            comment={props.comment}
          />
        )}
        <TouchableOpacity
          onPress={() => setModalOpen(true)}>
          <Text>Zgłoś</Text>
        </TouchableOpacity>
      </View>
      {modalOpen && (
        <ReportFromComment
          profile={commenter.email}
          reporter={props.owner.userData.email}
          additionalId={props.comment.commentid}
          socket={props.socket}
          setModalOpen={setModalOpen}
        />
      )}
    </View>
  );
}
