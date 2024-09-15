import {Image, Text, View} from 'react-native';
import Header from './Header';
import {styles} from './style';
import Content from './Content';
import DescriptionView from './DescriptionView';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <DescriptionView />
      <Content />
    </View>
  );
};
export default Home;
