import React, {memo, useEffect, useRef, useState} from 'react';
import {Animated, Text, Easing, View} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './styles';
import {Colors} from '../../Theme';
import Images from '../../Theme/Images';

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  top = 0,
  style,
  error,
  errorText,
  isLast,
  showTextError,
  ...rest
}) => {
  const [animValue] = useState(new Animated.Value(0));
  const [animHeight] = useState(new Animated.Value(0));
  const inputRef = useRef(null);

  const startShake = () => {
    Animated.sequence([
      Animated.timing(animValue, {
        toValue: 5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animValue, {
        toValue: -5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animValue, {
        toValue: 5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const showError = () => {
    Animated.timing(animHeight, {
      toValue: 20,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const hideError = () => {
    Animated.timing(animHeight, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    if (error && inputRef.current.isFocused()) {
      showError();
    } else if (error && value?.length && !inputRef.current.isFocused()) {
      showError();
      startShake();
    } else {
      hideError();
    }
  });

  return (
    <Animated.View
      style={[{top: top, ...style}, {transform: [{translateX: animValue}]}]}>
      <View
        style={[
          styles.Container,
          error &&
          inputRef?.current?.isFocused() &&
          value?.length && {borderColor: '#DF3C4E'},
          !error && value?.length && {borderColor: '#CBCBCB'},
          error && value?.length && {borderColor: '#DF3C4E'},
        ]}>
        <Input
          inputContainerStyle={{
            height: 50,
            borderBottomWidth: 0,
          }}
          ref={inputRef}
          inputStyle={styles.input}
          {...rest}
          placeholderTextColor="#CBCBCB"
          name={name}
          value={value}
          placeholder={placeholder}
          style={styles.input}
          containerStyle={styles.inputContainerStyle}
          keyboardType={keyboardType || 'email-address'}
        />
      </View>

      {showTextError && value !== '' && (
        <Animated.Text
          style={[
            styles.errorText,
            {height: animHeight,}
          ]}
          >
          {errorText}
        </Animated.Text>
      )}
    </Animated.View>
  );
};

export default memo(FormInput);
