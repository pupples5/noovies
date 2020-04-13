import React, { useEffect, useLayoutEffect } from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Tv from "../screens/Tv";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Favs from "../screens/Favs";


const Tabs = createBottomTabNavigator();

const getHeaderName = route => 
  route?.state?.routeNames[route.state.index] || "Movies"

export default ({navigation, route}) => {

    
    //useEffect사용해서 매변화마다 감지해서행동함
    //userEffect 대신 useLayoutEffect이걸 쓰면 좋은게 이건 모든 뮤터블한 그래픽 랜더링 작업이 완료 된후 동작하도록 되어 있음
    useLayoutEffect(()=>{
      console.log("route change");
      const name = getHeaderName(route);
      // console.log(route?.state?.routeNames[route.state.index]);
      navigation.setOptions({ 
        title : name,
      //   headerStyle : {
      //   //backgroundColor : name === "Tv" ? "red" : "blue"
      // }
    });
    },[route]);
    //navigation.setOptions({title : "Hello from child"})
  return(
  <Tabs.Navigator>
    <Tabs.Screen name = "Movies" component = {Movies}></Tabs.Screen>
    <Tabs.Screen name = "Tv" component = {Tv}></Tabs.Screen>
    <Tabs.Screen name = "Search" component = {Search}></Tabs.Screen>
    <Tabs.Screen name = "Favorite" component = {Favs}></Tabs.Screen>

  </Tabs.Navigator>
  );
  }