import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChartListScreen from './ChartListScreen';
import LineChartScreen from './LineChartScreen';
import BarChartScreen from './BarChartScreen';
import PieChartScreen from './PieChartScreen';
import ScatterChartScreen from './ScatterChartScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ChartListScreen} />
          <Stack.Screen name="BarChart" component={BarChartScreen}/>
          <Stack.Screen name="LineChart" component={LineChartScreen}/>
          <Stack.Screen name="PieChart" component={PieChartScreen}/>
          <Stack.Screen name="ScatterChart" component={ScatterChartScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
