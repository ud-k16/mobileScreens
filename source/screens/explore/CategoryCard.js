import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {Image, Text, View} from 'react-native';
import HealthCare from '../../assets/healthcare.png';

const CategoryCard = ({gradientColor = ['', ''], name = ''}) => {
  return (
    <LinearGradient
      colors={gradientColor}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.categoryCardStyle}>
      <View style={styles.categoryCardContent}>
        <Image source={HealthCare} style={{width: 25, height: 25}} />
        <Text style={styles.categoryCardText}>{name}</Text>
      </View>
    </LinearGradient>
  );
};
export default CategoryCard;
