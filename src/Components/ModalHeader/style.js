import {StyleSheet} from 'react-native';
import {StyleHelpers, Fonts, Colors, Metrics} from '../../Theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  main:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    height:7,
    width:85,
    backgroundColor:Colors.modalTop,
    borderRadius:3.5
  }
});
