import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyEarnings = () => {
    return (
        <View style={styles.container}>
            <Text>MyEarning</Text>
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
});

export default MyEarnings;
