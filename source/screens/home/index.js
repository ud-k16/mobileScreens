import {View} from 'react-native';
import Header from './Header';
import {styles} from './style';
import Content from './Content';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Image /> */}
      <Content />
    </View>
  );
};
export default Home;
