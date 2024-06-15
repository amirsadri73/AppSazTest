import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import styles from './style';

const ModalHeader = ({onPressClose}) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.main}>
        <TouchableOpacity style={styles.btn} onPress={onPressClose}>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalHeader;
