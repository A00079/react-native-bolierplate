import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Offers = () => {
    return (
        <View style={styles.container}>
            <Text>Offers</Text>
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

export default Offers;
