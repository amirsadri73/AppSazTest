import React, {useState,useEffect} from 'react';
import {View, Text,TouchableOpacity,ScrollView} from 'react-native';
import styles from './style';
import Wave from '../../../../Components/WaveGlass/waveGlass';
import Header from '../../../../Components/Header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setResources } from '../../../../Stores/actions/setResources';
import Images from '../../../../Theme/Images';
import {Colors} from '../../../../Theme';

const Dashboard = () => {
  //============================STATE==========================
  const [progress, setProgress] = useState(100)
  const [litr, setLitr] = useState(100)
  const [selectedItem, setSelectedItem] = useState(null);
  //============================Constants==========================
  const dispatch = useDispatch();
  const resources = useSelector(state => state.recourses.recourses);
  const {
    TeaIcon,
    CoffeeIcon,
DropIcon,
    PlusGreenIcon
  } = Images;
  //============================Functions==========================
  const sumDescriptions = (resources) => {
    return resources.reduce((total, resource) => total + parseFloat(resource.description), 0);
  };
  
  useEffect(() => {
    const totalDescription = sumDescriptions(resources);
    setLitr(totalDescription)
    if(totalDescription === 0){
     setProgress(0)
    }
    else if(totalDescription<.5 ){
      setProgress(25)
    }
    else if (totalDescription>=.5 && totalDescription<1){
      setProgress(50)
    }
    else if (totalDescription>=1){
      setProgress(99)
    }
    else{
      setProgress(0)
    }

  }, [resources]);

  useEffect(() => {
    // Check if AsyncStorage has resources and set them to Redux
    const fetchResources = async () => {
      try {
        const storedResources = await AsyncStorage.getItem('resources');
        if (storedResources !== null) {
          dispatch(setResources(JSON.parse(storedResources)));
        }
      } catch (error) {
        console.error('Error fetching resources from AsyncStorage:', error);
      }
    };

    fetchResources();
  }, []);
  const handlePress = (item) => {
    // Update selected item state
    setSelectedItem(item);
  };

  const handleIcon = (item) => {
    if (item.title === 'water') {
      return <DropIcon />;
    } else if (item.title === 'coffe') {
      return <CoffeeIcon />;
    } else if (item.title === 'tea') {
      return <TeaIcon />;
    } 
    else {
      return <TeaIcon />;
    }
  };
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.scrol}
  >
     <Header {...{litr}}/>

      <View style={styles.glassContainer}>
      <Wave progress={progress}/>
      <View style={styles.progressTextContainer}>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
      </View>
      <View style={styles.itemContainer}>
        {resources?.map((item, index) => (
         <View key={index}>
         {selectedItem === item && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity> 
              <PlusGreenIcon/>
            </TouchableOpacity>
          </View>
          )}
          <TouchableOpacity
          onPress={() => handlePress(item)}
          style={[styles.item, selectedItem === item ? {borderColor:Colors.blueBorder} : null]} 
        >
          <View style={styles.imageCover}>
          {handleIcon(item)}
          </View>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </TouchableOpacity>
         {selectedItem === item && (
          <View style={styles.buttonContainer}>
           <TouchableOpacity> 
              <View style={styles.redLine}></View>
            </TouchableOpacity>
           </View>
          )}
       </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Dashboard;
