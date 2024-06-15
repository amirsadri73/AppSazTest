import {StyleSheet, I18nManager} from 'react-native';
import {Metrics, Colors,Fonts} from '../../Theme';

export default styles = StyleSheet.create({
  input: {
    textAlign: 'left',
    color: Colors.dark,
    ...Fonts.text_14,
    fontWeight: '400',
  },
  inputContainerStyle: {
    ...Metrics.iconInput,
    height: 50,
  },

  TextContainer: {
  },

  Container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CBCBCB',
  },
  errorText:{
    top: 5,
    fontSize: 12,
    color: '#DF3C4E',
  }
});
