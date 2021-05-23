import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { Button } from '../../src/components';

export default function Start({ navigation }) {
  const handleNavigation = (stackname) => {
    navigation.navigate(stackname);
  }
  return (
    <View style={styles.container}>
      <View style={tailwind('flex flex-col w-full h-full justify-between pt-12 px-5')}>
        <View style={tailwind('w-full')}>
          <Text style={tailwind('text-white font-bold text-2xl')}>Welcome</Text>
        </View>
        <View style={tailwind('flex flex-col w-full items-center justify-center')}>
            <Image
              style={tailwind('h-44 w-44 mt-5')}
              source={require('../../assets/img/welcome_logo.png')}
            />
          </View>
        <View style={tailwind('w-full')}>
            <Text style={tailwind('mt-4 text-white text-center text-xl font-bold')}>
              The easy and simple way to earn money
            </Text>
            <Text style={tailwind('mt-1 text-gray-500 text-center text-sm font-bold')}>
              We reveal the top cashback current account available if you want to earn a extra cash throught your account
            </Text>
          </View>
        <View style={tailwind('flex flex-col w-full pb-28 px-12')}>
          <Button
            icon_name='arrow-forward'
            bgColor=''
            paddingY='py-4'
            borderClass=''
            iconSize={20}
            gradientColors={['#00d2ff','#2f80ed','#2f80ed']}
            text='Sign Up For Free'
            onPress={() => handleNavigation('SignUp')}
          />
          <Button
            icon_name='log-in'
            bgColor='bg-gray-800'
            paddingY='py-4'
            borderClass=''
            iconSize={20}
            gradientColors={['#243b55','#141e30','#141e30']}
            // gradientColors={['#0f2027','#203a43','#2c5364']}
            text='Sign In'
            onPress={() => handleNavigation('SignIn')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101010'
  }
});

