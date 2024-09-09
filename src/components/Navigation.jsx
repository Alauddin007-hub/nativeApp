import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import DashboardScreen from '../screen/DashboaedScreen'; // Corrected
import LoginScreen from '../screen/LoginScreen';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screen/SplashScreen';
import SignupScreen from '../screen/SignupScreen'; // Corrected

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);

  if (splashLoading) {
    return <SplashScreen />; // Show SplashScreen if loading is true
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo.access_token ? ( // Check if user is logged in
          <>
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="HOME"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LOGIN"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SIGNUP"
              component={SignupScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
