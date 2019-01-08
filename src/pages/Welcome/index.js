import React, { Component } from 'react';
import api from '~/services/api';
import { colors } from '~/styles';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import Styles from './styles';

class Welcome extends Component {
  state = {
    username: '',
    loading: false,
    error: false,
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('User');
    } catch (error) {
      this.setState({ loading: false, error: true });
      console.tron.log(error);
    }
  };

  render() {
    const { username, loading, error } = this.state;

    return (
      <View style={Styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={Styles.title}>Welcome</Text>
        <Text style={Styles.text}>To continue we need you to tell your GitHub user.</Text>

        {error && <Text style={Styles.error}>User not existent.</Text>}

        <View style={Styles.form}>
          <TextInput
            style={Styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter your username"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />

          <TouchableOpacity style={Styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <Text style={Styles.buttonText}>Proceed</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
