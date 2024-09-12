import {Image, Text, TextInput, View} from 'react-native';
import Dots from '../../assets/dots.png';
import {styles} from './style';

const Welcome = () => {
  return (
    <View style={styles.welcomeViewContainer}>
      <Image source={Dots} style={styles.dotsContainer} />
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.welcomeTextBold}>Find your Dream Sector!</Text>
      </View>
      <TextInput
        style={styles.searchBarStyle}
        placeholderTextColor={'#959595'}
        placeholder="What are you looking for?"
      />
    </View>
  );
};
export default Welcome;
