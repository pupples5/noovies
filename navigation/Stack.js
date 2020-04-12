import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Tabs from "../navigation/Tab"
import Detail from "../screens/Detail"

const Stack = createStackNavigator();

export default () =>(
<Stack.Navigator>
  <Stack.Screen name="Tabs" component = {Tabs}></Stack.Screen>
  <Stack.Screen name = "Detail" component = {Detail}></Stack.Screen>
</Stack.Navigator>
);