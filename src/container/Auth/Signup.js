import React,{useState} from "react";
import { View,Text, SafeAreaView, StyleSheet,TextInput,Image, TouchableOpacity, Alert} from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Icon from 'react-native-vector-icons/FontAwesome';
import CountryPicker from 'react-native-country-picker-modal';
import { registerUser, sendCode } from "../../services/authentication/UserAuthentication";
import {useNavigation} from "@react-navigation/native"


const Signup =()=>{
  const navigation=useNavigation()
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const [countryCode, setCountryCode] = useState('US');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUsernNme] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => {
      setPasswordVisibility(!isPasswordVisible);
    };

    const handleCountrySelect = (country) => {
      setCountryCode(country.cca2);
    };

    
    const handleSignUp=()=>{
      if (userName=="") {
    Alert.alert("User Name is required")    
    }else if (email==="") {
      Alert.alert("Email is required")
    }else if (phoneNumber == "") {
      Alert.alert("Phone number is required")
    }else if (password == "") {
      Alert.alert("Password is required")   
    }else{
  const payload={
    name:userName,
    email,
    password,
    phoneNumber
  }
  sendCode({email}).then((res)=>{
    if (res.status==200) {
      Alert.alert(res?.data?.message)
      navigation.navigate("CodeVerification",{
        inputValues:payload
      })
    }else{
      Alert.alert("something went wrong")
    }
  }).catch((error)=>{
    Alert.alert("Network failed")
  })
}
}
    return(
    <SafeAreaView style={{
        flex:1,
        backgroundColor:"black"
    }}>

    <View style={{
        justifyContent:"center"
    }}>
    <Header 
        title={"Signup"}
        txtColor={"white"}
    />
<View style={{
    alignItems:"center"
}}>
    <Text style={{
        color:"white",
        fontSize:20,
        fontStyle:"italic",
        fontWeight:"bold",
        marginTop:50
    }}>Create New Account</Text>
</View>

<View style={{
      alignItems:"center",
      marginTop:40
    }}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white"
        onChangeText={text => setUsernNme(text)}
        value={userName}
      />
    </View>

    <View style={{
      alignItems:"center",
      marginTop:20
    }}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      </View>



      

      <View style={{
        alignItems:"center"
      }}>
      <View style={styles.container}>
    <TextInput
        style={{
        textAlign:"center",
        paddingHorizontal:10,
        color:"white",
        }}
        placeholder="Password"
        secureTextEntry={!isPasswordVisible}
        placeholderTextColor="white"
        onChangeText={text => setPassword(text)}
        value={password}
      />
     <TouchableOpacity
        style={styles.iconContainer}
        onPress={togglePasswordVisibility}
      >
        <Icon
          name={isPasswordVisible ? 'eye' : 'eye-slash'}
          size={20}
          color="white"
        />
      </TouchableOpacity>

    </View>
    <View style={{
      alignItems:"center"
    }}>
      <View style={styles.container}>
        <CountryPicker
          withFilter
          withFlag
          withAlphaFilter
          withCallingCode
          withModal
          countryCode={countryCode}
          onSelect={handleCountrySelect}
        />
        <TextInput
        style={{
    flex: 1,
    height: 40,
    color:"white"
        }}
        placeholderTextColor="white"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
    </View>


  
    
    <View style={{
    alignItems:"center",
    marginTop:30
}}>

    <Button
        text={"SIGN UP"}
        txtColor={"black"}
        btncolor={"white"}
      onPress={handleSignUp}
    /> 

</View>   
 </View>



    </View>

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
      }
    });


export default Signup;