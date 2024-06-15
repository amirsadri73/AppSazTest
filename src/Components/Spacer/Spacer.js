import React from 'react';
import {View} from 'react-native';
const Spacer = ({
  style,
  color = '#707070',
  width = '100%',
  border,
  height = 1,
}) => {
  return (
    <View
      style={[
        {
          height: height,
          backgroundColor: color,
          width: width,
          alignSelf: 'center',
          borderRadius: border,
        },
        style,
      ]}
    />
  );
};
export default Spacer;
