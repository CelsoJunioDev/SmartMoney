/**
 * @format
 */
if(__DEV__) {
    import('./config/ReactotronConfig');
  }
import {AppRegistry} from 'react-native';
import App from './App';
import Main from './src/Pages/Main';
import {name as appName} from './app.json';
import NewEntry from './src/Pages/NewEntry';
import Report from './src/Pages/Report';
import Teste from './src/Pages/teste'

AppRegistry.registerComponent(appName, () => App);
