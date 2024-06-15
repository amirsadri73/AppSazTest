import React, { useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useCheckNetInfo = () => {
  const [netInfo, setNetInfo] = useState(true);
  const handleNetChecking = () => {
    NetInfo.fetch().then((state) => {
      if (state.type === 'none') {
        setNetInfo(false);
        toast.show('No Internet connection', {
          type: 'warning',
          placement: 'top',
          duration: 5000,
          offset: 100,
          animationType: 'zoom-in',
        });
      } else {
        setNetInfo(true);
      }
    });
  };

  return {
    netInfo,
    handleNetChecking,
  };
};
