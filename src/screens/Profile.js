import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={tailwind('w-full h-full flex flex-col')}>
                <View>
                    <Image
                        style={tailwind('flex flex-wrap w-full h-full relative')}
                        source={require('../../assets/img/profile-bg.png')}
                    />
                </View>
                <View style={tailwind('w-full h-full flex flex-col justify-between absolute top-10')}>
                    <View style={tailwind('w-full px-7')}>
                        <View style={tailwind('w-full')}>
                            <View style={tailwind('w-full flex flex-row justify-between items-center')}>
                                <TouchableOpacity onPress={() => handleNavigation('Start')} >
                                    <View style={tailwind('p-2 rounded-xl  mr-3')}>
                                        <Ionicons name='chevron-back-outline' size={25} color="white" />
                                    </View>
                                </TouchableOpacity>
                                <Text style={tailwind('text-lg text-white font-bold')}>Profile Details</Text>
                                <View style={tailwind('p-2 rounded-xl')}>
                                    <Ionicons name='pencil' size={20} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={tailwind('flex flex-col w-full items-center justify-center py-4')}>
                        <View style={tailwind('py-2')}>
                            <Image
                                style={tailwind('flex flex-wrap w-28 h-28 items-center relative rounded-full')}
                                source={require('../../assets/img/user-profile.jpg')}
                            />
                        </View>
                        <Text style={tailwind('text-lg text-white font-bold')}>Lia Elen</Text>
                        <Text style={tailwind('text-xs text-white font-bold')}>liaelen@gmail.com</Text>
                    </View>
                    <View style={styles.contentContainer}>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010',
    },
    contentContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: '#120321',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    }
});

export default Profile;
