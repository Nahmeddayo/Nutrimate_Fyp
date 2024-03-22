import React from "react";
import { View,Text,TouchableOpacity} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Header =({title,txtColor,backnav})=>{
    return(
        <View
        style={{
            borderBottomWidth:1,
            borderBottomColor:"white",
        }}>

        <View style={{flexDirection:"row",alignItems:"center"}}>
        <TouchableOpacity >
        <AntDesign name="left" size={30} color="white" /> 
      </TouchableOpacity>
        
       
        <Text  style={{
            color:txtColor,
            fontSize:20,
            margin:10,
            marginHorizontal:30
            
        }}>{title}</Text>
        </View>
            
        </View>
    )
}
export default Header;