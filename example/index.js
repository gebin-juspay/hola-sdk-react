import { AppRegistry } from 'react-native';
import App from './src/App';
import JuspayTopView from './src/JuspayTopView';
import JuspayTopViewAttached from './src/JuspayTopViewAttached';
import { name as appName } from './app.json';
import TestidSDKReact from 'hola-sdk-react';

AppRegistry.registerComponent(appName, () => App);

TestidSDKReact.notifyAboutRegisterComponent(
  TestidSDKReact.JuspayHeaderAttached
);
AppRegistry.registerComponent(
  TestidSDKReact.JuspayHeaderAttached,
  () => JuspayTopViewAttached
);
TestidSDKReact.notifyAboutRegisterComponent(TestidSDKReact.JuspayHeader);
AppRegistry.registerComponent(
  TestidSDKReact.JuspayHeader,
  () => JuspayTopView
);
