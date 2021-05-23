import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ text, icon_name, onPress, paddingY, gradientColors, borderClass, iconSize }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={[...gradientColors]}
                // start={[0.7, 0.5]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 4.5 }}
                style={tailwind(`flex flex-row justify-center items-center w-full mt-3 ${borderClass} ${paddingY} rounded-lg`)}
            >
                <Text style={tailwind('text-white text-center font-bold text-sm')}> {text} </Text>
                <Ionicons name={icon_name} size={iconSize} color="white" />
            </LinearGradient>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    buttonbg: {
        backgroundColor: '#000'
    }
});

export default Button;
