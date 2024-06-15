import React, {useState,useEffect} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import styles from './style';
import AddNewResourse from '../../../../Components/AddNewResourse/AddNewResourse';
import EmptyGreenButton from '../../../../Components/EmptyGreenButton/EmptyGreenButton';
import Header2 from '../../../../Components/Header2/Header2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setResources } from '../../../../Stores/actions/setResources';
import Images from '../../../../Theme/Images';

const AddResourses = () => {
  //============================STATE==========================
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //============================Constants==========================
  const dispatch = useDispatch();
  const resources = useSelector(state => state.recourses.recourses);
  const {
    SmallTeaIcon,
SmallDropIcon,
SmallCoffeeIcon,
    EditIcon
  } = Images;
  //============================Functions==========================
  const handleClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    // Update AsyncStorage whenever resources change
    if(resources){
      AsyncStorage.setItem('resources', JSON.stringify(resources));
    }
  }, [resources]);

  const handleAdd = () => {
    if (title && description) {
      const newResource = { title, description };
      const updatedResources = [...resources, newResource];
      dispatch(setResources(updatedResources));
      setTitle('');
      setDescription('');
    }
    setVisible(false);
  };

  const handleAddRecourse = () => {
    setVisible(true);
  };
  const handleIcon = (item) => {
    if (item.title === 'water') {
      return <SmallDropIcon />;
    } else if (item.title === 'coffe') {
      return <SmallCoffeeIcon />;
    } else if (item.title === 'tea') {
      return <SmallTeaIcon />;
    } 
    else {
      return <SmallTeaIcon />;
    }
  };
  return (
    <View style={styles.container}>
       <AddNewResourse
        isVisible={visible}
        onPressClose={handleClose}
        onPressAdd={handleAdd}
        {...{setTitle,
          setDescription,
          title,
          description
        }}
      />
      <Header2 style={styles.header}/>
      <EmptyGreenButton handleSubmit={handleAddRecourse} title={'Add New Recourses'}/>
      <View>
        {resources?.map((item, index) => (
        <View
        key={index}
        style={styles.product}
      >
        <View style={styles.left}>
        {handleIcon(item)}
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.price}>{item.description}</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.right}>
        <EditIcon/>
        </TouchableOpacity>
      </View>
        ))}
      </View>
    </View>
  );
};

export default AddResourses;
