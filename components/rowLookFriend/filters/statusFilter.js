import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Polygon from '../../../src/img/polygon';
import StatusFilterComponent from './statusFilterComponent';
import styles from '../../../styles/globalStyle';

export default function StatusFilter(props) {
  return (
    <ScrollView 
    horizontal={true}>
      {props.statusList.map((status, index) => (
        <StatusFilterComponent
          key={`StatusFilterComponent-${index}`}
          index={index}
          setSelectedStatusList={props.setSelectedStatusList}
          selectedStatusList={props.selectedStatusList}
          status={status}
        />
      ))}
    </ScrollView>
  );
}

// export default function StatusFilter(props) {
//   const Separator = () => {
//     return (
//       <View
//         style={{
//           height: 50,
//           width: 10,
//           backgroundColor: 'white',
//         }}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={{marginHorizontal: 10}}>
//       <FlatList
//         data={props.statusList.map(statusElement => {
//           return {
//             ...statusElement,
//             setSelectedStatusList: props.setSelectedStatusList,
//             selectedStatusList: props.selectedStatusList,
//           };
//         })}
//         renderItem={props => (
//           <StatusFilterComponent
//             status={props.item}
//             index={props.index}
//             setSelectedStatusList={props.item.setSelectedStatusList}
//             selectedStatusList={props.item.selectedStatusList}
//           />
//         )}
//         keyExtractor={() => Math.random()}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         ItemSeparatorComponent={Separator}
//       />
//     </SafeAreaView>
//   );
// }
