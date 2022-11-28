import React from 'react';
import { NavigationContainer } from "@react-navigation/native";


import GameNavigator from "./game";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <GameNavigator />
        </NavigationContainer>
    )
};

export default AppNavigator;
