import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import Foundation from 'react-native-vector-icons/Foundation';
import Logo from '../../assets/logo.png';
import {Image, View} from 'react-native';

const GradientHeader = () => {
  return (
    <LinearGradient
      colors={['#9766FF', '#F7F3FF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradient}>
      <View style={styles.headerAction}>
        <Foundation name="list" size={30} color="white" />
        <Image source={Logo} />
      </View>
    </LinearGradient>
  );
};
export default GradientHeader;
