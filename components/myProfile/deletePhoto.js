import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import deletePhotoFetch from './Fetch/deletePhoto'

export default function DeletePhoto(props) {

  const handleDelete = () => {
    props.setPhotoData(prev => {
      return prev.filter(e => {
        return e.photoid != props.photoid
      })
    }) 
    deletePhotoFetch(props.photoid)
  }

  return (
    <View style={{marginLeft: "auto"}}>
        <TouchableOpacity  onPress={handleDelete}> 
            <Image source={require("../../src/img/delete.png")} style={{width: 25, height: 25}}/>
        </TouchableOpacity>
    </View>
  )
}
