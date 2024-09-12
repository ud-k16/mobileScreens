import RecommendationCard from './RecommendationCard';
import {styles} from './style';
import {Text, View} from 'react-native';

const Recommendation = () => {
  return (
    <View style={styles.RecommendationContainer}>
      <View style={styles.headingTextcontainer}>
        <Text style={styles.headingText}>Recommended For You</Text>
      </View>
      <RecommendationCard />
    </View>
  );
};
export default Recommendation;
