import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/explore';
import Home from '../screens/home';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
