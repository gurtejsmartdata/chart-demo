import React from "react";
import { BarChart, BarData } from "react-native-charts-wrapper";

export default class BarChartScreen extends React.Component {

  readonly data: BarData = {
    dataSets: [
      { label: 'A', values: [1, 2, 3, 4, 5].map(x => 16 / x) }
    ]
  }

  render() {
    return (
      <BarChart style={{ flex: 1, margin: 16 }} data={this.data} />
    );
  }
}
