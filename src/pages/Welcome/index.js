import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import Styles from './styles';

const Welcome = () => (
  <View style={Styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={Styles.title}>Welcome</Text>
    <Text style={Styles.text}>To continue we need you to tell your GitHub user.</Text>

    <View style={Styles.form}>
      <TextInput
        style={Styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter your username"
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity style={Styles.button} onPress={() => {}}>
        <Text style={Styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
