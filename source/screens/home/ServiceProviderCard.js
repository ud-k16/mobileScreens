import {styles} from './style';
import {Image, Pressable, Text, View} from 'react-native';
import Design from '../../assets/design.png';
import Man from '../../assets/man.png';

const ServiceProviderCard = () => {
  return (
    <View style={styles.serviceCardContainer}>
      <Image source={Design} style={styles.decorationImageStyle} />

      <Image source={Design} style={styles.deocorationLeftSide} />
      <Image style={styles.serviceImageView} source={Man} />

      <View>
        <Text style={styles.serviceProviderName}>Rohit Singhania</Text>
        <Text style={styles.serviceText}>
          Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
        </Text>

        <Pressable style={styles.exploreButton}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 10}}>
            Know More
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default ServiceProviderCard;
