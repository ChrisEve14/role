import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../screens'

import { COLORS } from '../constants/themes/colors';
import { isAndroid } from '../utils';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Profile'
        screenOptions={{
            headerStyle: {
                backgroundColor: isAndroid ? COLORS.header : COLORS.headerDark,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
                fontFamily: 'Mina-Bold',
            },
            presentation: 'card',
            headerBackTitle: '',
            headerTitleAlign: 'center',
        }}
        >
        <Stack.Screen
                name="Profile"
                component={Profile}
        />
        </Stack.Navigator>

    )
}

export default ProfileNavigator;