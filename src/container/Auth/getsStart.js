import React from "react";
import { View,Text, SafeAreaView, Image, } from "react-native";
import Button from "../../components/Button";
import {useNavigation} from "@react-navigation/native"

const Start =()=>{
    const navigation=useNavigation()
    return(
<SafeAreaView style={{
    flex:1,
    backgroundColor:"white"
}}>

<View style={{
    alignItems:"center",
    marginTop:90
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

<View style={{
    alignItems:"center",
    marginTop:40

}}>
    <Text style={{
        color:"black",
        fontSize:20

    }}>
    Welcome To Nutrimate
    </Text>
</View>

<View style={{
    alignItems:"center",
    marginHorizontal:15,
    marginTop:20
}}>
    <Text style={{
        color:"black",
        whiteSpace: 'pre-wrap',
        alignItems:"center",
        fontSize:15
    }}>
Nourish your knowledge, fuel your{'\n'} wellness! Chat with our NutriMate for{'\n'} personalized nutrition guidance.
    </Text>
</View>
<View style={{
    alignItems:"center",
    marginTop:40
}}>
    <Button
        text={"Get STARTED"}
        txtColor={"white"}
        btncolor={"black"}
        onPress={()=>navigation.navigate("Login")}
    />
</View>
</SafeAreaView>
    )
}
export default Start;