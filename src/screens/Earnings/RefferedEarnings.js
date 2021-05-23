import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RefferedEarnings = () => {
    return (
        <View style={styles.container}>
            <Text>RefferedEarnings</Text>
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

export default RefferedEarnings;
