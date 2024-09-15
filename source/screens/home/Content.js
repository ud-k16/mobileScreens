import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Banner from '../../assets/banner.png';
import ServiceProviderCard from './ServiceProviderCard';
import Ratings from './Ratings';
import PopularServices from './PopularServices';
import HomeSearchBar from './HomeSearchBar';

const Content = () => {
  return (
    <View style={styles.contentContainer}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{flex: 1, marginBottom: 35}}>
        <HomeSearchBar />
        <Image source={Banner} style={styles.bannerStyle} />
        <PopularServices />
        <View style={styles.headingTextcontainer}>
          <Text style={styles.headingText}>Service Providers</Text>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
        <ServiceProviderCard />
        <ServiceProviderCard />
        <ServiceProviderCard />
        <Ratings />
      </ScrollView>
    </View>
  );
};
export default Content;
