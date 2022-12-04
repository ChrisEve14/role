import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Notif } from '../screens'

import { COLORS } from '../constants/themes/colors';
import { isAndroid } from '../utils';

const Stack = createNativeStackNavigator();

const NotifNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Notifications'
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
                name="Notifications"
                component={Notif}
        />
        </Stack.Navigator>

    )
}

export default NotifNavigator;