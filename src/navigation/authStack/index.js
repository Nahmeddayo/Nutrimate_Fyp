import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../container/Auth/Login';
import GetStart from '../../container/Auth/getsStart';
import SignUp from '../../container/Auth/Signup';
import CodeVerification from '../../container/Auth/CodeVerification';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="GetStart"
        component={GetStart}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CodeVerification"
        component={CodeVerification}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;