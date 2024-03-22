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
import AlarmManager from './Alarm';
import Button from '../../components/Button';
const Reminder = () => {
    const navigation=useNavigation();

    const handleSetAlarm = () => {
        // Set alarm to trigger after 10 seconds with a message
        AlarmManager(10, 'Wake up!');
      };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Header title={'Nutrimate'} txtColor={'white'} />

      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Button
          text={'Update Profile'}
          txtColor={'black'}
          btncolor={'white'}
          onPress={() => handleSetAlarm()}
        />
      </View>

      
    </SafeAreaView>
  );
};
export default Reminder;
