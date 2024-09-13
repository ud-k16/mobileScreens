import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/explore';

const Tab = createBottomTabNavigator();

const BottomTabs=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Home" component={Explore} />
    </Tab.Navigator>
  );
}

export default BottomTabs