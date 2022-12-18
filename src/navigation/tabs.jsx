import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto, Entypo, FontAwesome  } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import GameNavigator from './game';
import NotifNavigator from './notif';
import ProfileNavigator from './profile';
import { COLORS } from '../constants/themes/colors';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    const notifs = useSelector((state) => state.notifs.list);

    return (
        <BottomTab.Navigator 
        initialRouteName='Cove'
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: 'Mina',
                fontSize: 12,
            },
            tabBarActiveTintColor: COLORS.black,
            tabBarInactiveTintColor: COLORS.gray,
        }}>
            <BottomTab.Screen 
                name='Cove' 
                component={GameNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Fontisto 
                            name="island" 
                            size={24} 
                            color={COLORS.icons} 
                        />
                    )
                }}
            />
            <BottomTab.Screen 
                name='NotificationsTab' 
                component={NotifNavigator} 
                options={{ 
                    title:'Notifications',
                    tabBarIcon: ({ focused }) => (
                        <Entypo 
                            name="notification" 
                            size={24} 
                            color={COLORS.icons} 
                        />
                    ),
                    tabBarBadge: notifs.length === 0 ? null :notifs.length,
                    tabBarBadgeStyle: {
                        backgroundColor: COLORS.icons,
                        color: COLORS.white,
                        fontSize: 14,
                    },
                }}
            />
            <BottomTab.Screen 
                name='ProfileTab' 
                component={ProfileNavigator} 
                options={{ 
                    title:'Profile',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome 
                            name={ focused ? "user" : "user-o"}
                            size={23} 
                            color={COLORS.icons} 
                        />
                    )
            }}
            />
        </BottomTab.Navigator>
    )
}

export default Tabs;