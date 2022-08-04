import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import photoGalleryFetch from './photoFetch';
import styles from '../../styles/globalStyle';
import PhotoCard from './photoCard';
import Waiter from '../Waiter';

export default function SetPhotoToGallery(props) {
  const [photoData, setphotoData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setphotoData([]);
    photoGalleryFetch(props.user.email).then(
      data => {
        setphotoData(data.result);
        setIsLoaded(true);
      },
      reject => {
        console.warn(reject);
      },
    );
  }, [props.user]);

  return (
    <View>
      <Waiter visible={!isLoaded} />
      {isLoaded && photoData.length === 0 && (
        <Text style={{marginTop: 10}}> brak zdjęć </Text>
      )}
      {photoData.map(photo => (
        <PhotoCard
          key={`GalleryPhoto-${String(photo.photoid).padStart(3, '0')}`}
          user={props.user}
          owner={props.owner}
          photoData={photo}
          socket={props.socket}
          navigation={props.navigation}
        />
      ))}
    </View>
  );
}
