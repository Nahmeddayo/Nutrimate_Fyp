import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect,useState} from 'react';
import AuthStack from './authStack';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStack from './appStack';
import { setUserData } from '../redux/slices/Login';
import SplashScreen from "./../container/Auth/SplashScreen"
const Navigation = () => {
const [loading,setLoading]=useState(true)
  const state = useSelector(state => state.LoginSlice.user);
  const disptach = useDispatch();

  useEffect(() => {
    setTimeout(() => {
        getUserData();
    }, 2000);
  }, []);

  const getUserData = async () => {
    try {
        let data = await AsyncStorage.getItem('user');
        data = JSON.parse(data);
        console.log(data, 'userData');
        disptach(setUserData(data));
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
  };

  if (loading) {
    // Show the splash screen while loading user data
    return <SplashScreen />;
  }
   
  return (
    <NavigationContainer>
      {state == null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default Navigation;