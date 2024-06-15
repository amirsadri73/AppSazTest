import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../Theme';

export default StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container:{
    width: '100%',
    height: 264,
    overflow: 'hidden',
    borderTopLeftRadius: 25,
    borderTopRightRadius:25
  },
  main:{
    height: '100%',
    width: '100%',
    backgroundColor: '#FEFEFE',
    padding: 10,
  },
  topTextContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
    paddingTop:10
  },
  topText:{
    ...Fonts.text_18,
    color:Colors.dark,
    fontWeight:'700'
  },
  inputContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttomTextContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:15,
    paddingBottom:24
  },
  buttomText:{
    ...Fonts.text_14,
    color:Colors.blue,
    fontWeight:'500'
  },
  input:{
    width:'47%'
  }
});
