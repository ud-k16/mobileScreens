/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Explore from './source/screens/explore';

AppRegistry.registerComponent(appName, () => Explore);
