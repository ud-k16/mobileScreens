import {Image, Text, TextInput, View} from 'react-native';
import Dots from '../../assets/dots.png';
import {styles} from './style';
import Feather from 'react-native-vector-icons/Feather';

const Welcome = () => {
  return (
    <View style={styles.welcomeViewContainer}>
      <Image source={Dots} style={styles.dotsContainer} />
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.welcomeTextBold}>Find your Dream Sector!</Text>
      </View>
      <View style={styles.searchBarStyle}>
        <Feather name="search" size={24} color="#FF6694" />
        <TextInput
          placeholderTextColor={'#959595'}
          placeholder="What are you looking for?"
        />
      </View>
    </View>
  );
};
export default Welcome;
