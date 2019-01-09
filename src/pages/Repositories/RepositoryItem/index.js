import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={Styles.container}>
    <Text style={Styles.title}>{repository.full_name}</Text>

    <View style={Styles.infoContainer}>
      <View style={Styles.info}>
        <Icon name="star" size={12} style={Styles.infoIcon} />
        <Text style={Styles.infoText}>{repository.stargazers_count}</Text>
      </View>
      <View style={Styles.info}>
        <Icon name="code-fork" size={12} style={Styles.infoIcon} />
        <Text style={Styles.infoText}>{repository.forks_count}</Text>
      </View>
      <View style={Styles.info}>
        <Icon name="eye" size={12} style={Styles.infoIcon} />
        <Text style={Styles.infoText}>{repository.watchers_count}</Text>
      </View>
    </View>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};

export default RepositoryItem;
