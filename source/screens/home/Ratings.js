import {styles} from './style';
import {Image, Pressable, Text, View} from 'react-native';
import Reviewer1 from '../../assets/reviewer1.png';
import Reviewer2 from '../../assets/reviewer2.png';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RatedUserCard from './RatedUserCard';

const Ratings = () => {
  return (
    <View>
      <View style={[styles.headingTextcontainer, {columnGap: 259}]}>
        <Text style={styles.headingText}>Ratings</Text>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </View>
      <View
        style={[
          styles.headingTextcontainer,
          {marginVertical: 2, columnGap: 0},
        ]}>
        <Text style={[styles.headingText, {color: '#FF6694'}]}>13 Reviews</Text>

        <View
          style={{
            left: 120,
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 10,
          }}>
          <Text style={[styles.headingText, {color: '#FF6694'}]}>
            Write A Review
          </Text>
          <FontAwesome name="pencil-square-o" size={22} color="#FF6694" />
        </View>
      </View>
      <RatedUserCard image={Reviewer1} userName="Pooja Jain" />
      <RatedUserCard image={Reviewer2} userName="Pooja Jain" />
    </View>
  );
};
export default Ratings;
