import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import MyApp from './myFolder/MyApp';
const App = () => {
  return (
    <>
      <MyApp />
    </>
  );
};

export default App;

// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
{
  /* <NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name="Login" component={Login} />
  <Tab.Screen name="SignUp" component={SignUp} />
</Tab.Navigator>
</NavigationContainer> */
}
