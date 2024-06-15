import {StyleSheet} from 'react-native';
import {StyleHelpers,Colors,Fonts} from '../../Theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 24,
    marginTop:10,
    alignItems: 'center',
    backgroundColor: Colors.main,
    justifyContent:'space-between'
  },
  left: {
    width: '30%',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  leftBtn: {
    width: 50,
    height: 24,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  right: {
    width: '30%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightBtn: {
    width: 30,
    height: 24,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconRight: {
    ...StyleHelpers.iconBox,
    marginLeft: 10,
  },
  iconLeft: {
    ...StyleHelpers.iconBox,
  },
  Icon: {
    ...StyleHelpers.iconBox,
  },
  litrText:{
    ...Fonts.text_16,
    fontWeight:'600',
    color:Colors.dark,
    marginLeft:100
  },
  litrValue:{
    ...Fonts.text_72,
    fontWeight:'600',
    color:Colors.dark,
    alignSelf:'center',
    lineHeight:75
  },
});
