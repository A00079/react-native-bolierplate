import React, { Component, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../src/components';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import Constants from 'expo-constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '../../firebase';

const Otp = ({ navigation, route }) => {
    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    const [code5, setCode5] = useState('');
    const [code6, setCode6] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    // useEffect(() => {
    //     if (!!route.params.phonenumber) {
    //         sendVerification(route.params.phonenumber);
    //     }
    // }, []);

    const sendVerification = (phoneNumber) => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerificationId);
    };

    const confirmCode = () => {
        // const credential = firebase.auth.PhoneAuthProvider.credential(
        //     verificationId,
        //     code1 + code2 + code3 + code4 + code5 + code6
        // );
        // firebase
        //     .auth()
        //     .signInWithCredential(credential)
        //     .then((result) => {
        //         console.log(result);
        //         navigation.navigate('Landing');
        //     });
    navigation.navigate('Landing');
    };
    const handleNavigation = (stackname) => {
        navigation.navigate(stackname);
    }
    return (
        <View style={styles.container}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={Constants.manifest.extra.firebase}
            />
            <View style={tailwind('flex flex-col w-full h-full justify-start pt-12 px-5')}>
                <View style={tailwind('w-full mb-10')}>
                    <View style={tailwind('w-full flex flex-row justify-start items-center')}>
                        <TouchableOpacity onPress={() => handleNavigation('SignIn')} >
                            <View style={tailwind('p-2 bg-gray-800 rounded-xl border border-gray-600 mr-3')}>
                                <Ionicons name='chevron-back-outline' size={25} color="white" />
                            </View>
                        </TouchableOpacity>
                        <Text style={tailwind('text-2xl text-white font-bold')}>OTP</Text>
                    </View>
                </View>
                <View style={tailwind('flex flex-col w-full items-center justify-center')}>
                    <Image
                        style={tailwind('flex flex-wrap w-56 h-36 content-center')}
                        source={require('../../assets/img/otp.png')}
                    />
                    <Text style={tailwind('text-gray-400 font-bold text-2xl text-center py-1')}>Verification</Text>
                    <Text style={tailwind('text-white font-bold text-lg text-center py-1')}>Enter OTP To
                    Verify Account</Text>
                    <Text style={tailwind('text-white text-center w-44')}>We have send the OTP on</Text>
                    <Text style={tailwind('text-white text-center w-44')}>9895857483</Text>
                    <View style={tailwind('flex flex-row w-full items-center justify-between px-2')}>
                        <View style={tailwind('w-11 pt-6')}>
                            <TextInput
                                style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                onChangeText={setCode1}
                                keyboardType="number-pad"
                            />
                        </View>
                        <View style={tailwind('w-11 pt-6')}>
                            <TextInput
                                style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                onChangeText={setCode2}
                                keyboardType="number-pad"
                            />
                        </View>
                        <View style={tailwind('w-11 pt-6')}>
                            <TextInput
                                style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                onChangeText={setCode3}
                                keyboardType="number-pad"
                            />
                        </View>
                        <View style={tailwind('w-11 pt-6')}>
                            <TextInput
                                style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                onChangeText={setCode4}
                                keyboardType="number-pad"
                            />
                        </View>
                        <View style={tailwind('w-11 pt-6')}>
                            <TextInput
                                style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                onChangeText={setCode5}
                                keyboardType="number-pad"
                            />
                        </View>
                        <View style={tailwind('w-11 pt-6')}>
                            <TextInput
                                style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-gray-800 rounded text-sm border border-gray-600')}
                                onChangeText={setCode6}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                    <View style={tailwind('w-full pt-4 px-24')}>
                        <Button
                            icon_name='shield'
                            paddingY='py-3'
                            text='Verify OTP'
                            onPress={() => confirmCode()}
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

export default Otp;
