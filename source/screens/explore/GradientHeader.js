import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

const GradientHeader = () => {
  return (
    <LinearGradient
      colors={['#9766FF', '#F7F3FF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradient}></LinearGradient>
  );
};
export default GradientHeader;
