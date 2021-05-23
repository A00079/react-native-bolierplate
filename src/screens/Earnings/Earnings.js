import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyEarnings from './MyEarnings';
import RefferedEarnings from './RefferedEarnings';

const Tab = createMaterialTopTabNavigator();

const Earnings = () => {
    return (
        <Tab.Navigator
            initialRouteName="MyEarnings"
            tabBarOptions={{
                activeTintColor: '#fff',
                labelStyle: { fontSize: 12 },
                style: { paddingTop:42, backgroundColor:'#000'}
            }}
        >
            <Tab.Screen name="MyEarnings" options={{ title: 'My Earnings' }} component={MyEarnings} />
            <Tab.Screen name="RefferedEarnings" options={{ title: 'Reffered Earnings' }} component={RefferedEarnings} />
        </Tab.Navigator>
    );
};

export default Earnings;
