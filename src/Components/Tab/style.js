import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme';

export default StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 83,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.main,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    elevation: 20,
    borderWidth:1,
    borderColor:Colors.border
  },
  iconCover: {
    height: '70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '25%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
