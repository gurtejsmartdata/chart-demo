import React from "react";
import { processColor } from "react-native";
import { PieChart, PieData } from "react-native-charts-wrapper";

export default class PieChartScreen extends React.Component {

  readonly data: PieData = {
    dataSets: [
      {
        label: '',
        values: [{ label: 'A', value: 32 }, { label: 'B', value: 64 }, { label: 'C', value: 10 }],
        config: { colors: ['red', 'blue', 'green'].map(s => processColor(s)) }
      }
    ]
  };

  render() {
    return (
      <PieChart style={{ flex: 1 }} data={this.data} />
    );
  }
}