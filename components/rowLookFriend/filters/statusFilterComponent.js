import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacityBase,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import setStatus from '../../register/fetchStatus';
import Polygon from '../../../src/img/polygon';
import styles from '../../../styles/globalStyle';

export default function StatusFilterComponent(props) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (props.selectedStatusList[props.index] != undefined) {
      setIsSelected(props.selectedStatusList[props.index]);
    }
  }, [props.selectedStatusList]);

  return (
        <TouchableOpacity style={{display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: 10}} >
          <Polygon
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            // text={props.status}
            index={props.index}
            setSelectedStatusList={props.setSelectedStatusList}
            selectedStatusList={props.selectedStatusList}
          />
          <Text>{props.status.label}</Text>
        </TouchableOpacity>
  );
}
