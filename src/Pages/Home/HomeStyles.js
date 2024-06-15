import {StyleSheet} from 'react-native';
import { Metrics,Colors} from '../../Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  contentContainer: {
    ...Metrics.normalHorizontalPadding,
    width: '100%',
  },
});
