import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import styles from '../../../styles/globalStyle';
import addCommentFetch from './addCommentsFetch';

export default function AddComments(props) {
  const handleSubmit = values => {
    const comment = values.comment;
    values.comment = '';
    if (comment === '') {
      return;
    }
    const now = new Date(Date.now());
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

    props.socket.emit(
      'insertCommentToPhoto',
      props.photoid,
      props.owner.userData.email,
      date,
      comment,
      data => {
        if (data.result.insertedId < 0) {
          alert('Dodawanie komentarzy jest zablokowane');
          return;
        }
        props.setCommentsData(prev => [
          ...prev,
          {
            userid: props.owner.userData.email,
            photoid: props.photoid,
            comment: comment,
            commentid: data.result.insertedId,
            date: date,
          },
        ]);
      },
    );

    // addCommentFetch(
    //   props.owner.userData.email,
    //   props.photoid,
    //   comment,
    //   date,
    // ).then(data => {
    //   if (data.result.insertedId < 0) {
    //     alert('Dodawanie komentarzy jest zablokowane');
    //     return;
    //   }
    //   props.setCommentsData(prev => {
    //     return [
    //       ...prev,
    //       {
    //         userid: props.owner.userData.email,
    //         photoid: props.photoid,
    //         comment: comment,
    //         commentid: data.result.insertedId,
    //         date: date,
    //       },
    //     ];
    //   });
    // });

    // handleChange('');
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        comment: '',
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => {
        return (
          //     <KeyboardAwareScrollView
          //     resetScrollToCoords={{ x: 0, y: 0 }}
          //     style={{height: Dimensions.get("window").height}}
          //   >
          <View style={styles.row}>
            <Image
              source={{uri: props.owner.userData.photo}}
              style={{width: 30, height: 30}}
            />
            <TextInput
              style={{
                borderBottomColor: '#c5c5c5',
                borderBottomWidth: 1,
                width: 150,
                backgroundColor: 'white',
                marginHorizontal: 20,
              }}
              onBlur={handleBlur('comment')}
              placeholder="dodaj komentarz..."
              value={values.comment}
              onChangeText={handleChange('comment')}
              name="comment"></TextInput>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleSubmit}
              title="wyślij">
              <Text> wyślij </Text>
            </TouchableOpacity>
          </View>
          // </KeyboardAwareScrollView>
        );
      }}
    </Formik>
  );
}
