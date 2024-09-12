import {View} from 'react-native';
import {styles} from './style';

import Welcome from './Welcome';
import GradientHeader from './GradientHeader';

const Explore = () => {
  return (
    <View style={styles.container}>
      <GradientHeader />
      <Welcome />
    </View>
  );
};
export default Explore;
