import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import OffersScreen from './Offers';
import ProfileScreen from './Profile';
import EarningsScreen from './Earnings/Earnings';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Landing = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Offers') {
                        iconName = focused ? 'pricetag' : 'pricetag-outline';
                    } 
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } 
                    else if (route.name === 'Earnings') {
                        iconName = focused ? 'cash' : 'cash-outline';
                    } 
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Offers" component={OffersScreen} />
            <Tab.Screen name="Earnings" component={EarningsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});

export default Landing;
