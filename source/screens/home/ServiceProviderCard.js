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
        <Text style={styles.serviceText}>
          Now share the Construction Sectors with your anyone and can save it as
          bookmark
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            paddingTop: 6,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            columnGap: 25,
          }}>
          <Text style={styles.timeText}>Updated | 06:30 AM</Text>
          <Pressable style={styles.exploreButton}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 10}}>
              Explore
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default ServiceProviderCard;
