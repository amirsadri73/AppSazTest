import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';


const Header2 = ({style}) => {

  return (
      <View style={[styles.container, style]}>
          <Text style={styles.title}>Recourses</Text>
      </View>
  );
};

export default Header2;
