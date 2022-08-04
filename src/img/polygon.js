import React, {useState, useEffect} from 'react';
import Svg, {Path} from 'react-native-svg';
import {View, TouchableOpacity, Text} from 'react-native';

const Polygon = props => {
  //   const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    console.log(`Setting selected on status index ${props.index} to ${props.isSelected}`);
    props.setSelectedStatusList(prev => {
      prev[props.index] = props.isSelected;
      return prev;
    });
  }, [props.isSelected]);

  return (
    <TouchableOpacity
      onPress={() => {
        props.setIsSelected(prev => !prev);
      }}>
      <Svg
        width={80}
        height={70}
        // fill= '#BADA55'
        fill={props.isSelected ? '#BADA55' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
        // disabled={true}
        {...props}>
        <Path
          // d="M23.058 72.364 1.175 36.934 23.058 1.506h43.884l21.883 35.43-21.883 35.43H23.058Z"
          d="M19.279 60.31 1.175 31 19.28 1.69h36.326L73.708 31 55.605 60.31H19.28Z"
          stroke="#BADA55"
          strokeWidth={2}
        />
      </Svg>
    </TouchableOpacity>
  );
};
export default Polygon;
