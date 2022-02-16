import { StyleSheet } from 'react-native';
import { GUTTER_WIDTH, TEXT_CORRECTION } from '../../config/constants';

export default StyleSheet.create({
  toolbarContainer: {
    width: '100%',
    height: 42,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingTop: 16,
  },

  toolbarConfirmContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'flex-end'
  },

  toolbarCancelContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'flex-start',
    width: 30,

  },

  toolbarConfirmText: {
    fontSize: 23,
    paddingTop: 0,
    paddingRight: GUTTER_WIDTH,    
    paddingBottom: TEXT_CORRECTION,
    paddingLeft: GUTTER_WIDTH,
    fontWeight: '500',
  },

  toolbarCancelText: {
    fontSize: 23,
    paddingTop: 0,
    paddingRight: GUTTER_WIDTH,
    paddingBottom: TEXT_CORRECTION,
    paddingLeft: GUTTER_WIDTH,
    fontWeight: '500',
  },
});
