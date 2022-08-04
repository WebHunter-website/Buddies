import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import styles from "../../styles/globalStyle";
import showCommentsFetch from './showCommentsFetch';
import selectCommenterFetch from './selectCommentersFetch';
import Comment from './comment';
import AddComments from './addComments';
import Waiter from '../../Waiter';

export default function showComments(props) {
  // const [commentList, setCommentList] = useState(getFilledArray(false, 3));

  const [commentData, setCommentsData] = useState([]);
  const [commenters, setCommenters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentsCounter, setCommentsCounter] = useState(0);
  const [moreCommentsAvailable, setMoreCommentsAvailable] = useState(true);

  function loadComments() {
    setIsLoading(true);
    props.socket.emit(
      'Get commenters',
      props.photoid,
      commentsCounter,
      _commenters => {
        setCommenters(prev => [...prev, ..._commenters.result]);
        props.socket.emit(
          'Get comments',
          props.photoid,
          commentsCounter,
          (_comments, _moreAvailable) => {
            setCommentsData(prev => [...prev, ..._comments.result]);
            setCommentsCounter(prev => prev + 4);
            setMoreCommentsAvailable(_moreAvailable);
            setIsLoading(false);
          },
        );
      },
    );
  }

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <View>
      {commentData.map((comment, index) => {
        return (
          <Comment
            key={`Comment-${index}`}
            navigation={props.navigation}
            socket={props.socket}
            user={props.user}
            owner={props.owner}
            comment={comment}
            commenters={commenters}
            setCommentData={setCommentsData}
          />
        );
      })}
      {!isLoading && moreCommentsAvailable && (
        <TouchableOpacity onPress={loadComments}>
          <Text>Załaduj więcej...</Text>
        </TouchableOpacity>
      )}

      {/* <Waiter visible={isLoading || true} style={{position: 'relative', height: 0, width: null}} /> */}

      <AddComments
        owner={props.owner}
        photoid={props.photoid}
        setCommentsData={setCommentsData}
        socket={props.socket}
      />
    </View>
  );
}
