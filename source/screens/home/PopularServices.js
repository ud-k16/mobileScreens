import {Image, Text, View} from 'react-native';
import {styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Ser1 from '../../assets/ser1.png';
import Ser2 from '../../assets/ser2.png';
import Ser3 from '../../assets/ser3.png';
import Ser4 from '../../assets/ser4.png';
import Ser5 from '../../assets/ser5.png';

const PopularServices = () => {
  return (
    <View>
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
    </View>
  );
};
export default PopularServices;
