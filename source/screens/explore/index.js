import {Image, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';
import Dots from '../../assets/dots.png';

const Explore = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#9766FF', '#F7F3FF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradient}></LinearGradient>
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
    </View>
  );
};
export default Explore;
