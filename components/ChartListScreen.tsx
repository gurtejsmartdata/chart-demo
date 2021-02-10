import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, FlatList } from "react-native";

interface ListItem {
  id: string;
  name: string;
  route: string;
}

export default class ChartListScreen extends React.Component<{ navigation: NavigationProp<any> }> {

  readonly items: ListItem[] = [
    { id: '0', name: "Bar Chart", route: "BarChart" },
    { id: '1', name: "Pie Chart", route: "PieChart" },
    { id: '2', name: "Line Chart", route: "LineChart" },
    { id: '3',  name: "Scatter Plot Chart", route: "" }
  ];

  render() {
    const nav = this.props.navigation;

    return (
      <FlatList
        data={this.items}
        renderItem={({ item }) => <Button title={item.name} onPress={() => nav.navigate(item.route)} />}
      />
    );
  }
}