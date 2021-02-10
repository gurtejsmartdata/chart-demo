import React from "react";
import { processColor } from "react-native";
import { LineChart, LineData, LineDataset } from "react-native-charts-wrapper";

const colors = {
  
}

export default class LineChartScreen extends React.Component {

  readonly data: LineData = {
    dataSets: [
      { label: 'A', config: { color: processColor('red') }, values: [0, 1, 2, 3, 4, 5].map(x => ({x, y: x * x})) },
      { label: 'B', config: { color: processColor('blue') }, values: [0, 1, 2, 3, 4, 5].map(x => ({x, y: 2 * x})) },
      { label: 'C', config: { color: processColor('green') }, values: [1, 2, 3, 4, 5].map(x => ({x, y: 16 / x})) },
    ],
  };

  render() {
    return (
      <LineChart style={{ flex: 1 }} data={this.data} />
    );
  }
}