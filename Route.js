import React from 'react'
import {Image,LogBox} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, CardStyleInterpolators, TransitionPresets} from '@react-navigation/stack'

import Splash from './Splash'
import Login from './landingPage'
import Verify from './otpSubmit'
import Register from './regdriver'
import Document from './document'
import Offline from './Offlinemap'
import Accept from './acceptorder'
import Start from './startride'
import PickUp from './pickuporder'
import Arrived from './arrivedpickup'
import Desti from './arrivedtodestination'
import DocVerify from './documentverification'
LogBox.ignoreAllLogs();


const Stack = createStackNavigator();


const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  }

  export default function Nav() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator:
              CardStyleInterpolators.forHorizontalIOS,
            transitionSpec: {
              open: config,
              close: config
            }
          }}
          headerMode='float'
          animation='fade'
        >
      
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="Document" component={Document} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Offline" component={Offline} />
          <Stack.Screen name="Accept" component={Accept} />
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="PickUp" component={PickUp} />
          <Stack.Screen name="Arrived" component={Arrived} />
          <Stack.Screen name="Desti" component={Desti} />
          <Stack.Screen name="DocVerify" component={DocVerify} />
          
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }