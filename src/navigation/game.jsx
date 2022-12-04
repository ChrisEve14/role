import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Categories, Characters, Character} from '../screens';
import { COLORS } from "../constants/themes/colors"
import { isAndroid } from '../utils';

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName='Cove Haven'
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

        }}
        >
            <Stack.Screen 
            name='Cove Haven' 
            component={Categories}
            options={{
                // headerShown: false,
                headerTitleAlign: 'center',
            }} 
            />
            <Stack.Screen 
            name='Characters' 
            component={Characters} 
            options={({ route }) => ({
                title: route.params.title,
            })}
            />
            <Stack.Screen 
            name='Character' 
            component={Character}
            options={({ route }) => ({
                title: route.params.title,
            })} 
            />
        </Stack.Navigator>
    )
}

export default GameNavigator;