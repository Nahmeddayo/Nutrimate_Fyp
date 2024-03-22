import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
const Profile = () => {
  const navigation = useNavigation();

  const [userProfile, setUserProfile] = useState({
    name: 'Noman',
    userImage: require('../../assets/Logo.png'),
    height: '',
    dob: '',
    gender: '',
    weight: '',
  });

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
          marginTop: 40,
        }}>
        <Image
          source={userProfile.userImage}
          style={{height: 100, width: 100, borderRadius: 50}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
        }}>
      <Text style={{color:"white",fontSize:18}}>{userProfile?.name}</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <TextInput
          style={styles.input}
          placeholder="Height"
          placeholderTextColor="black"
          // onChangeText={text => setEmail(text)}
          value={userProfile.height}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <TextInput
          style={styles.input}
          placeholder="Gender"
          placeholderTextColor="black"
          // onChangeText={text => setEmail(text)}
          value={userProfile.gender}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <TextInput
          style={styles.input}
          placeholder="Weight"
          placeholderTextColor="black"
          // onChangeText={text => setEmail(text)}
          value={userProfile.weight}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Button
          text={'Update Profile'}
          txtColor={'black'}
          btncolor={'white'}
        //   onPress={() => handleLogin()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
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
    width: '80%',
    borderRadius: 5,
    paddingHorizontal: 40,
    color: 'black',
    backgroundColor: 'white',
  },
  iconContainer: {
    padding: 10,
    paddingHorizontal: 100,
  },
});
export default Profile;
