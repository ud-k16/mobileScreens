import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CategoryCard = ({gradientColor = ['', ''], name = ''}) => {
  let icon = '';
  switch (name) {
    case 'Construction':
      icon = <MaterialIcons name="engineering" size={20} color="#900" />;
      break;
    case 'Entertainment':
      icon = <Fontisto name="film" size={24} color="black" />;
      break;
    case 'Pet Care':
      icon = <FontAwesome name="paw" size={24} color="black" />;
      break;
    case 'Home Care':
      icon = <MaterialIcons name="maps-home-work" size={24} color="black" />;
      break;
    case 'Events':
      icon = <MaterialIcons name="event-note" size={24} color="black" />;
      break;
    case 'HealthCare':
      icon = <FontAwesome5 name="file-medical-alt" size={24} color="black" />;
      break;
    default:
      break;
  }

  return (
    <LinearGradient
      colors={gradientColor}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.categoryCardStyle}>
      <View style={styles.categoryCardContent}>
        {icon}
        <Text style={styles.categoryCardText}>{name}</Text>
      </View>
    </LinearGradient>
  );
};
export default CategoryCard;
