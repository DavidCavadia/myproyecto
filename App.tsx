import React from "react";
import {View,Text,TextInput,StyleSheet, ImageBackground} from "react-native";

const estilos=StyleSheet.create({
titulo:{
  color:"red",
  fontSize:50
},
contenedor:{
width:"100%",
height:150,
backgroundColor:"blue",
justifyContent:"center",
alignItems:"center",
}
})
export default function app(){
return(
  <View style={estilos.contenedor}>
    <Text style={estilos.titulo}>HOLA</Text>
    <TextInput placeholder="Escriba"/>
  </View>
)
}
