import React from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";

export default ({navigation}) =>{

  return (
    <View style = {{flex : 1, backgroundColor : "black"}}>
    <Text>Movie</Text>
    <Button onPress = {()=> navigation.navigate("Detail")} title = "Detail"> </Button>
    </View>
  );
};
 
