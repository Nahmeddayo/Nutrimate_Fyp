import 'react-native-gesture-handler';
import React from "react";
import Login from "./src/container/Auth/Login";
import Start from "./src/container/Auth/getsStart";
import Signup from "./src/container/Auth/Signup";
import Home from "./src/container/App/Home";
import Navigation from "./src/navigation";
import { Provider } from 'react-redux';
import store from './src/redux';

const App =()=>{
  return(
    <Provider store={store}>
    <Navigation/>
    </Provider>
     
  )
}
export default App;