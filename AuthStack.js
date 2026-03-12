import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// 1. Sửa tất cả '../' thành './'
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
// 2. Thêm chữ 's' vào chữ 'screens'
import ForgotPassword from './screens/ForgotPassword'; 

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}