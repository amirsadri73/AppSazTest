import {StyleSheet} from 'react-native';
import {Fonts, Colors,StyleHelpers} from '../../../../Theme';

export default StyleSheet.create({
  scrol: {
    width: '100%',
    paddingBottom:100,
    backgroundColor: Colors.main,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  glassContainer:{
    width:'100%',
    backgroundColor:Colors.main,
    ...StyleHelpers.center
  },
  progressTextContainer:{
    position:'absolute',
    bottom:10
  },

  progressText:{
    ...Fonts.text_34,
    fontWeight:'600',
    color:Colors.progressText
  },
  itemContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:230,
  },
  item: {
    padding: 5,
    marginHorizontal: 7,
    borderWidth: 1,
    borderColor: Colors.dark,
    height: 145,
    width: 85,
    borderRadius: 11,
  },
  imageCover: {
    alignSelf:'center'
  },
  titleText:{
    color:Colors.dark,
    ...Fonts.text_20,
    fontWeight:'500',
    textAlign:'center'
  },
  descriptionText:{
    color:Colors.grayText,
    ...Fonts.text_14,
    fontWeight:'500',
    textAlign:'center'
  },
  buttonContainer:{
    height:30,
    width:85,
    alignItems:'center',
    justifyContent:'center'
  },
  redLine:{
    height:3,
    width:18,
    backgroundColor:Colors.red,
    borderRadius:1.5
  }
 });
