import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Categories, Characters, Character} from '../screens';
import { colors } from "../constants/themes/colors"

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName='Categories'
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.backgroundDark,
            },
            headerTintColor: colors.header,
            headerTitleStyle: {
                fontFamily: 'Mina-Bold',
            }
        }}
        >
            <Stack.Screen 
            name='Categories' 
            component={Categories}
            options={{
                headerShown: false,
            }} 
            />
            <Stack.Screen name='Characters' component={Characters} />
            <Stack.Screen name='Character' component={Character} />
        </Stack.Navigator>
    )
}

export default GameNavigator;