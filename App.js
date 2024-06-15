import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/Pages/Home/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/Stores/storeConfig/store';
import {Colors} from './src/Theme'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.main} barStyle="dark-content"/>
      <HomeScreen />
    </Provider>
  );
};

export default App;