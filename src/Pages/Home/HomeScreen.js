import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './HomeStyles';
import Tab from '../../Components/Tab/Tab';
import AddResourses from './Components/AddResourses/AddResourse';
import Dashboard from './Components/Dashboard/Dashboard';

const HomeScreen = () => {
  //============================STATE==========================
  const [buttomTab, setButtomTab] = useState(1);
  //============================Constants==========================
  //============================Functions==========================
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      {buttomTab === 1 && <Dashboard/>}
      {buttomTab === 2 && <AddResourses/>}
      </View>
      <Tab onButtomTabbarPress={setButtomTab}/>
    </View>
  );
};

export default HomeScreen;
