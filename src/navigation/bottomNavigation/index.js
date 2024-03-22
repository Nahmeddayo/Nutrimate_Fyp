import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../container/App/Home';
import ChatBot from '../../container/App/Chatbot';
import Profile from '../../container/App/Profile';
import Reminder from '../../container/App/Reminder';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown:false
      }} />
      <Tab.Screen name="ChatBot" component={ChatBot} options={{
        headerShown:false
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown:false
      }} />
      <Tab.Screen name="Reminder" component={Reminder} options={{
        headerShown:false
      }} />
    </Tab.Navigator>
  );
}

export default BottomTab