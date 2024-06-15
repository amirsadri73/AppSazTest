import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Indicator from '../Indicator/Indicator';
import styles from './styles';
import {Colors} from '../../Theme';

const FormBtn = ({handleSubmit, title, disabled, loading, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      disabled={disabled || loading}
      onPress={handleSubmit}
      style={[
        styles.BtnContainer,
        style,
        disabled && {backgroundColor: Colors.disable},
      ]}>
      {loading ? (
        <Indicator color={'white'} />
      ) : (
        <Text style={[styles.textBtn, disabled && {color: Colors.green}]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default FormBtn;
