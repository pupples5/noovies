import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Tv from "../screens/Tv";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Favs from "../screens/Favs";


const Tabs = createBottomTabNavigator();


export default () => (
  <Tabs.Navigator>
    <Tabs.Screen name = "Movies" component = {Movies}></Tabs.Screen>
    <Tabs.Screen name = "Tv" component = {Tv}></Tabs.Screen>
    <Tabs.Screen name = "Search" component = {Search}></Tabs.Screen>
    <Tabs.Screen name = "Favs" component = {Favs}></Tabs.Screen>

  </Tabs.Navigator>

);