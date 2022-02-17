import { StyleSheet } from 'react-native';
import { GUTTER_WIDTH, TEXT_CORRECTION, ITEM_HEIGHTS } from '../../config/constants';

export default StyleSheet.create({
  toolbarContainer: {
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
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
    fontWeight: '300',
  },

  toolbarCancelText: {
    fontSize: 23,
    paddingTop: 0,
    paddingRight: GUTTER_WIDTH,
    paddingBottom: TEXT_CORRECTION,
    paddingLeft: GUTTER_WIDTH,
    fontWeight: '300',
  },
});
