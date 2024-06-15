import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../../../Theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  header:{
    marginBottom:30
  },
  product: {
    height:78,
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    justifyContent:'space-between',
    elevation: 20,
    borderWidth:1,
    borderColor:Colors.border,
    backgroundColor: Colors.main,
    borderRadius:15,
    paddingHorizontal:20
  },
  productDetails: {
    marginLeft: 20,
  },
  left:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  right:{
    height:'90%',
    justifyContent:'center'
  }
});
