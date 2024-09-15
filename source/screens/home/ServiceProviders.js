import {Text, View} from 'react-native';
import ServiceProviderCard from './ServiceProviderCard';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './style';

const ServiceProviders = () => {
  return (
    <>
      <View style={styles.headingTextcontainer}>
        <Text style={styles.headingText}>Service Providers</Text>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </View>
      <ServiceProviderCard />
      <ServiceProviderCard />
      <ServiceProviderCard />
    </>
  );
};
export default ServiceProviders;
