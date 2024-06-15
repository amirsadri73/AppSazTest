import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Images from '../../Theme/Images';


const Header = ({litr,style}) => {
  const {
    EditIcon,
    CalendarIcon,
  } = Images;

  const handleEditPress = () => {
console.log('edit')
  };
  const handleCalendarPress = () => {
    console.log('Calendar')
  };
  return (
    <View>
      <View style={[styles.container, style]}>
        <View style={styles.left}>
          <TouchableOpacity
            onPress={handleCalendarPress}
            style={styles.leftBtn}>
            <CalendarIcon style={styles.iconLeft} />
          </TouchableOpacity>
          </View>
          <Text style={styles.litrText}>Litrs</Text>
        <View style={styles.right}>
          <TouchableOpacity onPress={handleEditPress} style={styles.rightBtn}>
            <EditIcon style={styles.iconRight} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.litrValue}>{litr}</Text>
    </View>
  );
};

export default Header;
