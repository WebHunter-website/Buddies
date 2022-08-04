import React, { useState, useEffect } from "react";
import {
    ScrollView,
  StyleSheet,
  Text,
  View,
  Animated
} from "react-native";
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

class ProgressiveImage extends React.Component {
    defaultImageAnimated = new Animated.Value(0);
    imageAnimated = new Animated.Value(0);
  
    handleDefaultImageLoad = () => {
      Animated.timing(this.defaultImageAnimated, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };
  
    handleImageLoad = () => {
      Animated.timing(this.imageAnimated, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };
  
    render() {
      const {defaultImageSource, source, style, ...props} = this.props;
      return (
        <View style={styles.container}>
          <Animated.Image
            {...props}
            source={defaultImageSource}
            style={[style, {opacity: this.defaultImageAnimated}]}
            onLoad={this.handleDefaultImageLoad}
            blurRadius={1}
          />
          <Animated.Image
            {...props}
            source={source}
            style={[style, {opacity: this.imageAnimated}, styles.imageOverlay]}
            onLoad={this.handleImageLoad}
          />
        </View>
      );
    }
  }
  
  export default ProgressiveImage;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e1e4e8',
    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
  });











// export default function Skeleton(){
//     return(
//     <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
//     <SkeletonPlaceholder>
//     <View style={{ flexDirection: "row", alignItems: "center" }}>
//     <View style={{ width: 60, height: 60, borderRadius: 50 }} />
//     <View style={{ marginLeft: 20 }}>
//         <View style={{ width: 120, height: 20, borderRadius: 4 }} />
//         <View
//         style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
//         />
//     </View>
//     </View>
//     </SkeletonPlaceholder>
//     </ScrollView>
//     )
// }
