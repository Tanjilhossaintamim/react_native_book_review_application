import React, { useEffect } from "react";
import AppNavigator from "./app/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "./app/redux/Store";




const App = () => {

  return (
    <Provider store={Store}>

      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}


export default App;