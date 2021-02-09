import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <FlatList
        data={[
          "Line Chart",
          "Bar Chart",
          "Pie Chart",
          "Scatter Plot Chart"
        ]}
        renderItem={({item}) => <Button title={item} onPress={() => {setTimeout(0)}}/>} />
    );
  }
}
