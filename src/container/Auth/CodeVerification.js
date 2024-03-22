import React,{useState} from "react";
import { View,Text, SafeAreaView,ImageBackground, StyleSheet,TextInput,Image, TouchableOpacity,Alert} from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Icon from 'react-native-vector-icons/FontAwesome';
import { registerUser } from "../../services/authentication/UserAuthentication";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import {useNavigation} from "@react-navigation/native"
const CodeVerification =({route})=>{
    const navigation=useNavigation()
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

  const handleLogin=()=>{
   if (value==="") {
    Alert.alert("Otp is required")
  }else{
const payload={
  ...route?.params?.inputValues,
  code:value,
}
registerUser(payload).then((res)=>{
  if (res.status==200) {
    Alert.alert(res?.data?.message)
    navigation.navigate("Login")
  }else{
    console.log(res.data,"resssssssssssssssssssssssssssssssssss");
    Alert.alert("something went wrong")
  }
}).catch((error)=>{
  Alert.alert("Network failed")
})
}
}

return(
    <SafeAreaView style={{
        flex:1

    }}>
<ImageBackground
      source={require('../../assets/Background.png')} 
      style={styles.background}>
    <View style={{
        justifyContent:"center"
    }}>
    <Header 
        title={"Code Verification"}
        txtColor={"white"}
    />

<View style={{
    alignItems:"center",
    marginTop:30
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
        color:"white",
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
       <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />
    </View>

   
    <View style={{
    alignItems:"center",
    marginTop:20
}}>

    <Button
        text={"SIGN IN"}
        txtColor={"black"}
        btncolor={"white"}
        onPress={()=>handleLogin()}
    /> 
    </View>
    
      </View>
    </ImageBackground>

    </SafeAreaView>
);

};
const styles =StyleSheet.create({
  container: {
    width:'80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginTop:20,
    height: 50,
    paddingHorizontal: 30,
  },
background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    width:'80%',
    borderRadius: 5,
    paddingHorizontal: 40,
    color:"white"
  },
  iconContainer: {
    padding: 10,
    paddingHorizontal:100
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20,color:"white"},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 30,
    borderRadius:10,
    borderWidth: 1,
    borderColor: "white",
    textAlign: 'center',
    color:"white"

  },
  focusCell: {
    borderColor: "white",
  },
});
export default CodeVerification;