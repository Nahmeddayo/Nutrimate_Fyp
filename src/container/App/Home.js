import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
    const navigation=useNavigation();
  const data = [
    {
      name: 'ChatBot',
      image:require('../../assets/chatbot.png'),
      path: 'ChatBot',
    },
    {
      name: 'Language',
      image:require('../../assets/lang.png'),
      path: '',
    },
    {
      name: 'Reminder',
      image:require('../../assets/reminder.png'),
      path: '',
    },
    {
      name: 'Profile',
      image:require('../../assets/profile.png'),
      path: '',
    },
    {
      name: 'Saved Diet',
      image:require('../../assets/diet.png'),
      path: '',
    },
    {
      name: 'Saved Exercise',
      image:require('../../assets/exercise.png'),
      path: '',
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Header title={'Nutrimate'} txtColor={'white'} />


      <FlatList
        data={data}
        style={{marginTop:50}}
        numColumns={2}
        renderItem={({item, ind}) => {
          return (
            <View style={{marginHorizontal:"20px",width:"50%",alignItems:"center",marginTop:20}}>
              <TouchableOpacity style={{backgroundColor:"white",alignItems:"center",width:150,elevation:10,borderRadius:10,paddingVertical:5}} onPress={()=>navigation.navigate(item?.path)}>
              <Image source={item?.image} style={{width:100,height:100}} />
              <Text style={{color: 'black', fontSize: 18}}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default Home;
