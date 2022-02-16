import React, { ReactElement } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './ToolbarStyles';
import { TEST_IDS } from '../../config/constants';


interface Props {
  confirmText: string;
  confirmTextColor: string;
  toolbarBackground: string;
  toolbarBorderColor: string;
  fontSizeToolbar: number;
  fontFamilyConfirmText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
export default ({
  confirmText,
  confirmTextColor,
  toolbarBackground,
  toolbarBorderColor,
  fontSizeToolbar,
  fontFamilyConfirmText,
  onConfirm,
  onCancel
}: Props): ReactElement => (
  <View
    style={[
      styles.toolbarContainer,
      {
        backgroundColor: toolbarBackground,
        borderBottomColor: toolbarBorderColor,
      },
    ]}
  >
    <View style={styles.toolbarCancelContainer}>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={onCancel}
        testID={TEST_IDS.CONFIRM_BUTTON}
      >
        <Text style={[styles.toolbarCancelText, { color: confirmTextColor, fontSize: fontSizeToolbar, fontFamily: fontFamilyConfirmText }]}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.toolbarConfirmContainer}>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={onConfirm}
        testID={TEST_IDS.CONFIRM_BUTTON}
      >
        <Text style={[styles.toolbarConfirmText, { color: confirmTextColor, fontSize: fontSizeToolbar, fontFamily: fontFamilyConfirmText }]}>
          {confirmText}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
