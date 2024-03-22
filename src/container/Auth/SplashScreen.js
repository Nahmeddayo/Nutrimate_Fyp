import React from "react";
import { View,Text, SafeAreaView, Image, } from "react-native";

const Start =()=>{
    return(
<SafeAreaView style={{
    flex:1,
    backgroundColor:"white"
}}>

<View style={{alignItems:"center",flex:1,justifyContent:"center"}}>
<View style={{
    alignItems:"center",
    }}>

<Image source={require('../../assets/Logo.png')}  style={{
    height:200,
    width:200
}}/>
</View>

<View style={{
    alignItems:"center"
}}>
    <Text style={{
        color:"black",
        fontSize:20,
        fontStyle:"italic",
        fontWeight:"bold"
        } }>
    NutriMate
    </Text>
</View>
</View>

</SafeAreaView>
    )
}
export default Start;