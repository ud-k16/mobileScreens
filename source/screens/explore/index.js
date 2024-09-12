import {ScrollView, View} from 'react-native';
import {styles} from './style';

import Welcome from './Welcome';
import GradientHeader from './GradientHeader';
import Category from './Category';
import Sectors from './Sectors';
import Recommendation from './Recommendation';

const Explore = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <GradientHeader />
        <Welcome />
        <Category />
        <Sectors />
        <Recommendation />
      </ScrollView>
    </View>
  );
};
export default Explore;
