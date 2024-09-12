import {styles} from './style';
import {Pressable, Text, View} from 'react-native';

const RecommendationCard = () => {
  return (
    <View style={styles.RecommendationCardContainer}>
      <View style={styles.RecommendedImageView}></View>
      <View>
        <Text style={styles.recommendedText}>
          Now share the Construction Sectors with your anyone and can save it as
          bookmark
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            paddingTop: 6,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            columnGap: 25,
          }}>
          <Text style={styles.timeText}>Updated | 06:30 AM</Text>
          <Pressable style={styles.exploreButton}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 10}}>
              Explore
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default RecommendationCard;
