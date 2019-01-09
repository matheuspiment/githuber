import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '~/styles';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        height: 54 + getStatusBarHeight(),
        paddingTop: getStatusBarHeight(),
      },
      android: {
        height: 54,
      },
    }),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },

  icon: {
    color: colors.darker,
  },
});

export default Styles;
