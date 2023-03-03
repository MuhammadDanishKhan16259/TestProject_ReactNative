import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login/Login';
import OtpAuth from '../screens/otpAuth/OtpAuth';
import Signup from '../screens/signup/Signup';
const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpAuth"
        component={OtpAuth}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} /> */}
      {/* <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  );
}

export default StackNavigation;
