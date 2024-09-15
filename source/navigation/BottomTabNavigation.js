import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/explore';
import Home from '../screens/home';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <Entypo name="home" size={24} color="black" />;
          } else if (route.name === 'Explore') {
            return <Entypo name="shop" size={24} color="black" />;
          }
        },
      })}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
