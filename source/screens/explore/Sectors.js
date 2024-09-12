import {styles} from './style';
import {Image, Text, View} from 'react-native';
import HomeServices from '../../assets/homeservice.png';
import HealthCare from '../../assets/healthcare.png';

const Sectors = () => {
  return (
    <View style={styles.popularSectorContainer}>
      <View style={styles.headingTextcontainer}>
        <Text style={styles.headingText}>Popular Sectors</Text>
      </View>
      <View style={styles.sectorView}>
        <Image style={styles.sectorImageStyle} source={HomeServices} />
        <Image style={styles.sectorImageStyle} source={HealthCare} />
      </View>
    </View>
  );
};
export default Sectors;
