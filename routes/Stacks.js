import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { enableScreens } from 'react-native-screens';
import Start from '../src/screens/Start';
import SignUp from '../src/screens/SignUp';
import SignIn from '../src/screens/SignIn';
import Otp from '../src/screens/Otp';
import Landing from '../src/screens/Landing';

enableScreens();

const Stack = createNativeStackNavigator();

export default function StartNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Start"
                component={Start}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Otp"
                component={Otp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Landing"
                component={Landing}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}