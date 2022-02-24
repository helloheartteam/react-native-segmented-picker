import React from 'react';
interface Props {
    confirmText: string;
    cancelText: string;
    confirmTextColor: string;
    toolbarBackground: string;
    toolbarBorderColor: string;
    fontSizeToolbar: number;
    fontFamilyConfirmText: string;
    onConfirm: () => void;
    onCancel: () => void;
}
declare const _default: ({ confirmText, cancelText, confirmTextColor, toolbarBackground, toolbarBorderColor, fontSizeToolbar, fontFamilyConfirmText, onConfirm, onCancel }: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
export default _default;
