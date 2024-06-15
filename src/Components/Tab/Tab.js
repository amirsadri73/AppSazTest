import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Images from '../../Theme/Images';

const Tab = ({
  onButtomTabbarPress,
}) => {
    //============================STATE============================
    const [item, setItem] = useState(1);
  //============================Constants==========================
  const {
    AddGreenIcon,
    AddIcon,
    AlertIcon,
    HomeGreenIcon,
    HomeIcon,
    ProfileIcon,
  }= Images;
    //============================Functions==========================
  const setTabbar = (item) => {
    onButtomTabbarPress(item);
    setItem(item);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => setTabbar(1)}
        style={styles.button}
      >
        <View style={styles.iconCover}>
          {item ===1 ? <HomeGreenIcon /> : <HomeIcon />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTabbar(2)}
        style={styles.button}
      >
        <View style={styles.iconCover}>
        {item ===2 ? <AddGreenIcon /> : <AddIcon />}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTabbar(3)}
        style={styles.button}
      >
        <View style={styles.iconCover}>
        {item ===3 ? <AlertIcon /> : <AlertIcon />}

        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTabbar(4)}
        style={styles.button}
      >
        <View style={styles.iconCover}>
        {item ===4 ? <ProfileIcon /> : <ProfileIcon />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Tab;
