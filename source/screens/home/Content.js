import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Banner from '../../assets/banner.png';
import Ser1 from '../../assets/ser1.png';
import Ser2 from '../../assets/ser2.png';
import Ser3 from '../../assets/ser3.png';
import Ser4 from '../../assets/ser4.png';
import Ser5 from '../../assets/ser5.png';

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
        <View style={styles.headingTextcontainer}>
          <Text style={styles.headingText}>Popular Services</Text>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
        <View style={styles.servicesView}>
          <Image source={Ser1} />
          <Image source={Ser2} />
          <Image source={Ser3} />
          <Image source={Ser4} />
          <Image source={Ser5} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Content;
