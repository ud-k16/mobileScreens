import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import Banner from '../../assets/banner.png';
import Ratings from './Ratings';
import PopularServices from './PopularServices';
import HomeSearchBar from './HomeSearchBar';
import ServiceProviders from './ServiceProviders';

const Content = () => {
  return (
    <View style={styles.contentContainer}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{flex: 1, marginBottom: 35}}>
        <HomeSearchBar />
        <Image source={Banner} style={styles.bannerStyle} />
        <PopularServices />
        <ServiceProviders />
        <Ratings />
      </ScrollView>
    </View>
  );
};
export default Content;
