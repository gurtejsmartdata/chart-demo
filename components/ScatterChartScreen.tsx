import React from "react";
import { processColor } from "react-native";
import { ScatterChart, ScatterData } from "react-native-charts-wrapper";

export default class ScatterChartScreen extends React.Component {

  readonly data: ScatterData = {
    dataSets: [
      {
        label: 'A',
        values: [{ x: 12, y: 16 }, { x: 8, y: 20 }, { x: 10, y: 12 }, { x: 16, y: 18 }],
        config: { color: processColor('red'), scatterShapeSize: 64, scatterShape: 'CIRCLE' }
      },
      {
        label: 'B',
        values: [{ x: 20, y: 12 }, { x: 18, y: 16 }, { x: 18, y: 10 }, { x: 16, y: 12 }],
        config: { color: processColor('blue'), scatterShapeSize: 64, scatterShape: 'CIRCLE' }
      }
    ]
  };

  render() {
    return (
      <ScatterChart style={{ flex: 1 }} data={this.data} />
    );
  }
}