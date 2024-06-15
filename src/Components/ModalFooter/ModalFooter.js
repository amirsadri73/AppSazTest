import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import Images from '../../Theme/Images';

const ModalFooter = ({
  onPressClose,
  onPressAdd,
  leftTitle,
  rightTitle,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.content}>
        <TouchableOpacity
          onPress={onPressAdd}
          style={styles.rightButton}>
          <Text style={styles.rightText}>{rightTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressClose}
          style={styles.LeftButton}
          >
          <Text style={styles.LeftText}>{leftTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalFooter;
