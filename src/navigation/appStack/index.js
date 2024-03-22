import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../container/App/Home';
import BottomTab from "../bottomNavigation/index"
const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomTab"
        component={BottomTab}
      />
    </Stack.Navigator>
  );
}

export default AppStack;