import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, CheckBox, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../src/components';

const SignUp = ({ navigation }) => {
    const [isSelected, setSelection] = useState(true);
    const handleNavigation = (stackname) => {
        navigation.navigate(stackname);
    }
    return (
        <View style={styles.container}>
            <View style={tailwind('flex flex-col w-full h-full justify-between pt-12 px-5')}>
                <View style={tailwind('w-full')}>
                    <View style={tailwind('w-full flex flex-row justify-start items-center')}>
                        <TouchableOpacity onPress={() => handleNavigation('Start')} >
                            <View style={tailwind('p-2 bg-gray-800 rounded-xl border border-gray-600 mr-3')}>
                                <Ionicons name='chevron-back-outline' size={25} color="white" />
                            </View>
                        </TouchableOpacity>
                        <Text style={tailwind('text-2xl text-white font-bold')}>Sign up</Text>
                    </View>
                </View>
                <View style={tailwind('w-full')}>
                    <Text style={tailwind('text-center text-sm text-gray-300 font-bold')}>Invite Only Sign Up</Text>
                    <Text style={tailwind('text-center text-sm text-yellow-300 font-medium')}>Know More</Text>
                </View>
                <View style={tailwind('w-full')}>
                    <SafeAreaView>
                        <View style={tailwind('w-full mb-3')}>
                            <Text style={tailwind('text-left text-sm text-gray-200 font-bold pb-1')}>Name</Text>
                            <TextInput
                                style={tailwind('px-3 py-2 text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                value={'Ajay Bendre'}
                            />
                        </View>
                        <View style={tailwind('w-full mb-3')}>
                            <Text style={tailwind('text-left text-sm text-gray-200 font-bold pb-1')}>Mobile Number</Text>
                            <TextInput
                                style={tailwind('px-3 py-2 text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                value={'91+ 98947484674'}
                            />
                        </View>
                        <View style={tailwind('w-full mb-3')}>
                            <Text style={tailwind('text-left text-sm text-gray-200 font-bold pb-1')}>Referral Code Number</Text>
                            <TextInput
                                style={tailwind('px-3 py-2 text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                value={'Enter friends referral code *'}
                            />
                        </View>
                        <View style={tailwind('w-full mb-3')}>
                            <Text style={tailwind('text-left text-sm text-gray-200 font-bold pb-1')}>Code</Text>
                            <TextInput
                                style={tailwind('px-3 py-2 text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                value={'Choose your code *'}
                            />
                        </View>
                        <View style={tailwind('w-full mb-3')}>
                            <Text style={tailwind('text-left text-sm text-gray-200 font-bold pb-1')}>Email Address</Text>
                            <TextInput
                                style={tailwind('px-3 py-2 text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                value={'Email Address (optional)'}
                            />
                        </View>
                        <View style={tailwind('w-full flex flex-row items-center')}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                            />
                            <Text style={tailwind('text-left text-sm text-gray-200 font-bold')}>I accept all T & C</Text>
                        </View>
                    </SafeAreaView>
                </View>
                <View style={tailwind('w-full pb-12 px-16')}>
                    <Button
                        icon_name='person-add'
                        bgColor=''
                        iconSize={14}
                        paddingY='py-2'
                        borderClass=''
                        gradientColors={['#00d2ff', '#2f80ed', '#2f80ed']}
                        text='Create Free Account'
                    />
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

export default SignUp;
