import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

import Styles from './styles';

const OrganizationItem = ({ organization }) => (
  <View style={Styles.container}>
    <Image style={Styles.avatar} source={{ uri: organization.avatar_url }} />
    <Text style={Styles.title}>{organization.login}</Text>
  </View>
);

OrganizationItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizationItem;
