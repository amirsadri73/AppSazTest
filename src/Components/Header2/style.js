import {StyleSheet} from 'react-native';
import {StyleHelpers, Fonts, Colors, Metrics} from '../../Theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 54,
    width:'100%',
    ...StyleHelpers.center,
    backgroundColor: Colors.main,
    elevation:10,
    borderRadius:8,
    marginTop:20
  },
  title:{
    ...Fonts.text_18,
    fontWeight:'600',
    color:Colors.dark
  }
});
