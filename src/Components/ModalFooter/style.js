import {StyleSheet} from 'react-native';
import {StyleHelpers, Fonts, Colors, Metrics} from '../../Theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  content:{
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightButton:{
    width: '47%',
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
  },
  rightText:{
    color:Colors.lightText,
    ...Fonts.text_14,
    fontWeight:'700'
  },
  LeftButton:{
    width: '47%',
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.green,
    borderWidth: 1,
  },
  LeftText:{
    color:Colors.green,
    ...Fonts.text_14,
    fontWeight:'700'
  }
});
