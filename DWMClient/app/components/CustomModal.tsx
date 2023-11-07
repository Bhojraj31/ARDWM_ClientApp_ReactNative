import React, {ReactNode} from 'react';
import {View, Modal, StyleSheet, ViewStyle, TextStyle} from 'react-native';
interface CustomModalProps {
  isVisible: boolean;
  style?: Object;
  onPress?: () => void;
  children: ReactNode;
  modalContianer?: ViewStyle;
}
const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  children,
  modalContianer = {},
}) => {
  return (
    <Modal visible={isVisible} animationType="none" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderColor: 'lightgray',
  },
  modalContent: {
    width: '80%',
    height: '50%',
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 5,
    fontSize: 24,
    justifyContent: 'center',
    borderColor: 'lightgray',
  },
});
export default CustomModal;
