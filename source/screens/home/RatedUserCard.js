import {Image, Text, View} from 'react-native';
import {styles} from './style';

import Dogbone from '../../assets/dogbone.png';
const RatedUserCard = ({userName = '', image = ''}) => {
  return (
    <View style={styles.RatingsCardContainer}>
      <View style={{marginTop: 15}}>
        <Text style={styles.serviceProviderName}>{userName}</Text>
        <Image source={Dogbone} style={styles.boneImage} />
        <Text style={styles.serviceText}>
          Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
        </Text>
      </View>
      <Image source={image} style={styles.ratedUserImage} />
    </View>
  );
};
export default RatedUserCard;
