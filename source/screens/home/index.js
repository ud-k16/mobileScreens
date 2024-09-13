import {Image, View} from 'react-native';
import Header from './Header';
import {styles} from './style';
import Content from './Content';
import Dog1 from '../../assets/dog1.png';
import Dog2 from '../../assets/dog2.png';
import Dog3 from '../../assets/dog3.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={Dog1} style={styles.dog1} />
      <Image source={Dog2} style={styles.dog2} />
      <Image source={Dog3} style={styles.dog3} />
      <Content />
    </View>
  );
};
export default Home;
