import { StyleSheet } from 'react-native';
import { GUTTER_WIDTH, TEXT_CORRECTION } from '../../config/constants';

export default StyleSheet.create({
  toolbarContainer: {
    width: '100%',
    height: 42,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  toolbarConfirmContainer: {
    height: '100%',
    paddingLeft: 30,
    justifyContent: 'center',
  },

  toolbarConfirmText: {
    fontSize: 15,
    paddingTop: 0,
    paddingRight: GUTTER_WIDTH,
    paddingBottom: TEXT_CORRECTION,
    paddingLeft: 0,
  },

  toolbarCancelText: {
    fontSize: 15,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: TEXT_CORRECTION,
    paddingLeft: GUTTER_WIDTH,
  },
});
