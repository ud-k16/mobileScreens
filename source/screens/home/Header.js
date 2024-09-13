import {Image, View} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Logo from '../../assets/logo.png';
import {styles} from './style';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Foundation name="list" size={24} color="black" />
      <Image source={Logo} />
      <Feather name="bell" size={24} color="black" />
    </View>
  );
};
export default Header;
