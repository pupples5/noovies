import React from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";

export default ({navigation}) =>{

  return (
    <View>
    <Text>Movie</Text>
    <Button onPress = {()=> navigation.navigate("Detail")} title = "Detail"> </Button>
    </View>
  );
};
 
