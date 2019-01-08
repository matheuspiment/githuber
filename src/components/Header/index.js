import React from 'react';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import Styles from './styles';

const Header = ({ title }) => (
  <View style={Styles.container}>
    <StatusBar barStyle="dark-content" />
    <View style={Styles.left} />
    <Text style={Styles.title}>{title}</Text>
    <TouchableOpacity onPress={() => {}} />
  </View>
);

export default Header;
