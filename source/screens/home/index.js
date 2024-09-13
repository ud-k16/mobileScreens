import {Image, View} from 'react-native';
import Header from './Header';
import {styles} from './style';
import Content from './Content';
import Dog1 from '../../assets/dog1.png';
import Dog2 from '../../assets/dog2.png';
import Dog3 from '../../assets/dog3.png';
import Paw1 from '../../assets/paw1.png';
import Paw2 from '../../assets/paw2.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={Paw1} style={styles.paw1} />
      <Image source={Paw2} style={styles.paw2} />
      <Image source={Dog1} style={styles.dog1} />
      <Image source={Dog2} style={styles.dog2} />
      <Image source={Dog3} style={styles.dog3} />
      <Content />
    </View>
  );
};
export default Home;
