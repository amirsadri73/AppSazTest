import React, {useEffect,useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalInput from '../ModalInput/ModalInput';
import styles from './style';


const AddNewResourse = ({
  isVisible,
  onRequestClose,
  onPressAdd,
  onPressClose,
  setTitle,
  setDescription,
  title,
  description
}) => {
  const [error, setError] = useState(false);
  const handleChangeTitle = value => {
    setTitle(value);
  };
  const handleChangeDescription = value =>{
    setDescription(value)
  }

  return (
    <View>
      <Modal
        hasBackdrop={true}
        isVisible={isVisible}
        avoidKeyboard
        swipeDirection={['up', 'left', 'right', 'down']}
        testID={'modal'}
        style={styles.view}
        useNativeDriver
        hideModalContentWhileAnimating
        onRequestClose={onRequestClose}>
        <View
          style={styles.container}>
          <View
            style={styles.main}>
            <ModalHeader {...{onPressClose}}/>
            <View
              style={styles.topTextContainer}>
              <Text style={styles.topText}>Add</Text>
            </View>
            <View
              style={styles.inputContainer}>

              <ModalInput
                style={styles.input}
                name="Title"
                value={title}
                onChangeText={handleChangeTitle}
                placeholder={'Title'}
                showTextError={true}
                error={error}
                errorText={'please insert Title'}
              />
               <ModalInput
                style={styles.input}
                name="Description"
                value={description}
                onChangeText={handleChangeDescription}
                placeholder={'Description'}
                showTextError={true}
                error={error}
                errorText={'please insert Description'}
              />
              
            </View>
            <TouchableOpacity
              style={styles.buttomTextContainer}>
              <Text style={styles.buttomText}>+Upload Icon</Text>
            </TouchableOpacity>
            <ModalFooter
            {...{
            onPressClose,
            onPressAdd,
            leftTitle:'Cancel',
            rightTitle:'Save'}}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default AddNewResourse;
