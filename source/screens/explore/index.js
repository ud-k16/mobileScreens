import {View} from 'react-native';
import {styles} from './style';

import Welcome from './Welcome';
import GradientHeader from './GradientHeader';
import Category from './Category';
import Sectors from './Sectors';

const Explore = () => {
  return (
    <View style={styles.container}>
      <GradientHeader />
      <Welcome />
      <Category />
      <Sectors />
    </View>
  );
};
export default Explore;
