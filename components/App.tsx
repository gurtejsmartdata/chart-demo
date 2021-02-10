import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChartListScreen from './ChartListScreen';
import LineChartScreen from './LineChartScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ChartListScreen} />
          <Stack.Screen name="LineChart" component={LineChartScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
