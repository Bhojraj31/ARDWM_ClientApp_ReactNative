import React, { useState, useRef } from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';
import Btn from '../components/Btn';
import { deepskyblue } from '../assets/constants/constants';
import { NavigationProp, useNavigation } from '@react-navigation/native'

const EnterPin: React.FC = () => {

  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  // UseState For set pins
  const [pin, setPin] = useState<string[]>(['', '', '', '']);

  const inputRefs = useRef<(TextInput | null)[]>([null, null, null, null]);

  const handlePinChange = (index: number, value: string) => {
    if (value === 'Backspace' || value === 'Delete') {
      // for remove current input
      if (index > 0) {
        if (pin[index] === '' && pin[index - 1] !== '') {
          const newPin = [...pin];
          newPin[index - 1] = '';
          setPin(newPin);
          inputRefs.current[index - 1]?.focus();
        } else if (pin[index] !== '') {
          const newPin = [...pin];
          newPin[index] = '';
          setPin(newPin);
        }
      } else if (index === 0 && pin[index] !== '') {
        const newPin = [...pin];
        newPin[index] = '';
        setPin(newPin);
      }
    } else if (value.length === 1 && index < pin.length) {
      // Handle regular digit input
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // target to next input field if available
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#030f1a' }}>
      {/* for space */}
      <View style={{ flex: .30 }}></View>

      <View style={{ flex: .20 }}>
        <Image source={require('../assets/images/DWM.png')} style={{ width: 250, height: 90, tintColor: 'white' }} />
      </View>

      <View style={{ flex: .5 }}>
        <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>

          {/* Input Box */}
          <View style={{ flexDirection: 'row', marginBottom:10 }}>
            {pin.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                placeholder=""
                style={styles.inputField}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handlePinChange(index, text)}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === 'Backspace' || e.nativeEvent.key === 'Delete') {
                    handlePinChange(index, e.nativeEvent.key);
                  }
                }}
              />
            ))}
          </View>
          
          {/* Text */}
          <Text style={{ fontSize: 20, color: 'grey', marginBottom:10 }}>
            Enter 4-Digit PIN
          </Text>
          
          {/* Btn */}
          <Btn
            textColor={deepskyblue}
            btnLabel="Forgot PIN?"
            Press={() => {
              navigation.navigate('ForgetPin')
            }}
          />
        </View>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: 50,
    height: 50,
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    margin: 7,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});

export default EnterPin;
