import {Colors, StyleHelpers, Fonts} from '../../Theme';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  BtnContainer: {
    width: '100%',
    height: 49,
    borderRadius: 8,
    borderColor: Colors.green,
    borderWidth: 1,
    ...StyleHelpers.center
  },
  textBtn: {
    color: Colors.green,
    fontWeight: '600',
    ...Fonts.text_18
  },
});
