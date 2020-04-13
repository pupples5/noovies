import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Tabs from "../navigation/Tab"
import Detail from "../screens/Detail"

const Stack = createStackNavigator();

export default () =>(
<Stack.Navigator mode="card" screenOptions={{
  headerStyle : {
    backgroundColor : "black",
    borderBottomColor : "black",
    shadowColor : "black"
    
  },
  headerTintColor : "white",
  headerTitleAlign :"center",
  headerBackTitleVisible : false,
}}>
  <Stack.Screen name="Tabs" component = {Tabs}></Stack.Screen>
  <Stack.Screen name = "Detail" component = {Detail} options={{
    headerTintColor :"red"//이런식으로 부분적용도 가능
  }}></Stack.Screen>
</Stack.Navigator>
);