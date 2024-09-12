import {View} from 'react-native';
import {styles} from './style';

import Welcome from './Welcome';
import GradientHeader from './GradientHeader';
import Category from './Category';

const Explore = () => {
  return (
    <View style={styles.container}>
      <GradientHeader />
      <Welcome />
      <Category />
    </View>
  );
};
export default Explore;
