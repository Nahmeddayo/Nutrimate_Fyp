import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView
} from 'react-native';
import Header from '../../components/Header';
import FontAwesome from "react-native-vector-icons/FontAwesome"
const ChatBot = () => {

    const [messages,setMessages]=useState([]);

const dummyChat=[
    {
        id:1,
        query:"Hello"
    },
    {
        id:2,
        response:"Hello there"
    },
    {
        id:3,
        query:"Hello"
    },
    {
        id:4,
        response:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:1,
        query:"Hello"
    },
    {
        id:2,
        response:"Hello there"
    },
    {
        id:3,
        query:"Hello"
    },
    {
        id:4,
        response:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:1,
        query:"Hello"
    },
    {
        id:2,
        response:"Hello there"
    },
    {
        id:3,
        query:"Hello"
    },
    {
        id:4,
        response:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:1,
        query:"Hello"
    },
    {
        id:2,
        response:"Hello there"
    },
    {
        id:3,
        query:"Hello"
    },
    {
        id:4,
        response:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:1,
        query:"Hello"
    },
    {
        id:2,
        response:"Hello there"
    },
    {
        id:3,
        query:"Hello"
    },
    {
        id:4,
        response:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:1,
        query:"Hello"
    },
    {
        id:2,
        response:"Hello there"
    },
    {
        id:3,
        query:"Hello"
    },
    {
        id:4,
        response:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    
]
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>

      <Header title={'ChatBot'} txtColor={'white'} />
      <KeyboardAvoidingView style={{flex:1,justifyContent:"flex-start",marginTop:10,marginBottom:5}}>
      <View style={{marginBottom:60}}>
        <FlatList
            data={dummyChat}
            renderItem={({item,ind})=>{
                return(
                    <View>
                    {item.query &&
                        <View style={{backgroundColor:"white",alignSelf:"flex-start",paddingHorizontal:8,width:"70%",marginVertical:10,paddingVertical:8,marginLeft:10,borderRadius:8}}>
                            <Text style={{color:"black"}}>{item.query}</Text>
                        </View>
                    }
                    {item.response &&
                        <View style={{backgroundColor:"white",alignSelf:"flex-end",paddingHorizontal:8,width:"70%",marginVertical:10,paddingVertical:8,marginRight:10,borderRadius:8}}>
                            <Text style={{color:"black"}}>{item.response}</Text>
                        </View>
                    }
                    </View>
                )
            }}
        />
      </View>

        <View style={{flex:1,justifyContent:"flex-end"}}>
      <View
              style={{
                height:50,
                // flex:1,
                justifyContent:"flex-end",
                backgroundColor: "white",
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                marginHorizontal: 5,
                justifyContent: 'space-between',
                borderColor: "grey",
                borderWidth: 0.5,
                marginBottom:2,
                marginVertical:10
              }}>
              <TextInput
                style={{
                  marginLeft: 4,
                  color: "white",
                  width: "75%",
                }}
                placeholder={'Type something....'}
                // value={msgValue}
                multiline={true}
                blurOnSubmit={true}
                // onChangeText={text => setMsgValue(text)}
                ></TextInput>
              <TouchableOpacity>
                <FontAwesome
                  name="send"
                  color="black"
                  size={20}
                  style={{ marginRight:10 }}
                />
              </TouchableOpacity>
            </View>
            </View>
            </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default ChatBot;
