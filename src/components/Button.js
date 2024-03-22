import React from "react";
import { View ,Text, TouchableOpacity} from "react-native";

const Button =({text,txtColor,btncolor,onPress})=>{
    return(

        <TouchableOpacity onPress={onPress}>
        <View style={{
            backgroundColor:btncolor,
            borderRadius:20,
            paddingHorizontal:60,
            paddingVertical:10

        }} >
         <Text style={{color:txtColor,}}>
            {text}
         </Text>   
        </View>
        </TouchableOpacity>
    )
}

export default Button;