import {Image, Text, View} from 'react-native';
import Dog1 from '../../assets/dog1.png';
import Dog2 from '../../assets/dog2.png';
import Dog3 from '../../assets/dog3.png';
import Paw1 from '../../assets/paw1.png';
import Paw2 from '../../assets/paw2.png';
import {styles} from './style';

const DescriptionView = () => {
  return (
    <>
      <Text style={styles.helloText}>Hello,</Text>
      <Text style={styles.descriptionText}>Fancy for a wash today!</Text>
      <Image source={Paw1} style={styles.paw1} />
      <Image source={Paw2} style={styles.paw2} />
      <Image source={Dog1} style={styles.dog1} />
      <Image source={Dog2} style={styles.dog2} />
      <Image source={Dog3} style={styles.dog3} />
    </>
  );
};
export default DescriptionView;
