import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './source/navigation/BottomTabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
