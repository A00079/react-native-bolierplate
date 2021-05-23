import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../src/components';

const SignIn = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleNavigation = (stackname) => {
        navigation.navigate(stackname, { phonenumber: '+91' + phoneNumber });
    }
    return (
        <View style={styles.container}>
            <View style={tailwind('flex flex-col w-full h-full justify-start pt-12 px-5')}>
                <View style={tailwind('w-full mb-10')}>
                    <View style={tailwind('w-full flex flex-row justify-start items-center')}>
                        <TouchableOpacity onPress={() => handleNavigation('Start')} >
                            <View style={tailwind('p-2 bg-gray-800 rounded-xl border border-gray-600 mr-3')}>
                                <Ionicons name='chevron-back-outline' size={25} color="white" />
                            </View>
                        </TouchableOpacity>
                        <Text style={tailwind('text-2xl text-white font-bold')}>Sign in</Text>
                    </View>
                </View>
                <View style={tailwind('flex flex-col w-full items-center justify-center')}>
                    <Image
                        style={tailwind('flex flex-wrap w-56 h-56 content-center')}
                        source={require('../../assets/img/signotp.png')}
                    />
                    <Text style={tailwind('text-white font-bold text-lg text-center py-1')}>Enter your mobile number</Text>
                    <Text style={tailwind('text-white text-center w-40')}>Will send you one time password (OTP)</Text>
                    <View style={tailwind('w-72 pt-6')}>
                        <TextInput
                            onChangeText={setPhoneNumber}
                            placeholder='Enter mobile number'
                            keyboardType="phone-pad"
                            autoCompleteType="tel"
                            style={tailwind('px-3 py-2 text-center text-white relative bg-gray-800 rounded text-lg border border-gray-600')}
                        />
                    </View>
                    <View style={tailwind('w-full pt-4 px-24')}>
                        <Button
                            icon_name='mail'
                            paddingY='py-3'
                            text='Send OTP'
                            onPress={() => handleNavigation('Otp')}
                            bgColor=''
                            iconSize={14}
                            borderClass=''
                            gradientColors={['#00d2ff', '#2f80ed', '#2f80ed']}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101010'
    }
});

export default SignIn;
