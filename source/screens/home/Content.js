import {Image, ScrollView, TextInput, View} from 'react-native';
import {styles} from './style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Banner from '../../assets/banner.png';
const Content = () => {
  return (
    <View style={styles.contentContainer}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.searchBarStyle}>
          <Feather name="search" size={24} color="#FF6694" />
          <TextInput
            placeholderTextColor={'#FF6694'}
            placeholder="What are you looking for?"
            style={styles.inputStyle}
          />
          <Ionicons name="options-outline" size={24} color="black" />
        </View>
        <Image source={Banner} style={styles.bannerStyle} />
      </ScrollView>
    </View>
  );
};
export default Content;
