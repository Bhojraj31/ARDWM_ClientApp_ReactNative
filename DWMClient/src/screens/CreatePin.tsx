import React, { useState } from 'react';
import { View, Text } from 'react-native';
import InputField from '../components/InputField';
import Btn from '../components/Btn';
import { background, deepskyblue } from '../assets/constants/constants';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCreatePinMutation } from '../service/AuthService';

// Define a type for the expected route params
interface RouteParams {
  firstName: string;
  lastName: string;
}

const CreatePin = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const [pin, setPin] = useState('');
  const [validationError, setValidationError] = useState('');

  const [createPinApiRequest, createPinApiResponse] = useCreatePinMutation()

  const route = useRoute();
  const { firstName, lastName } = route.params as RouteParams;

  const handlePinChange = (text: string) => {
    // Only allow 4 mumbers 
    const validationRegex = /^[0-9]*$/;
    // check input value number and lenght is 4
    if (validationRegex.test(text) && text.length <= 4) {
      setPin(text);
      // Clear the validation error for the field
      setValidationError('');
    } else {
      setValidationError('Please enter a valid 4-digit PIN');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: background }}>
      <View style={{ flex: 0.9, justifyContent: 'space-evenly', alignItems: 'center' }}>

        {/* user data */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>{`Hello, ${firstName} ${lastName}`}</Text>
        </View>

        {/* title */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Please create a 4-digit PIN</Text>
          <Text style={{ fontSize: 15, color: 'grey' }}>for quick access</Text>
        </View>

        {/* Fields */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <InputField
            placeholder="Enter PIN"
            secureTextEntry={true}
            maxLength={4}
            keyboardType='numeric'
            errorMessage={validationError}
            value={pin}
            onChangeText={handlePinChange}
          />
        </View>

        {/* button */}
        <View>
          <Btn
            textColor={deepskyblue}
            btnLabel="Next"
            Press={() => {
              if (validationError === '' && pin.length === 4) {
                navigation.navigate('EnterPin', { pin });
                createPinApiRequest({ pin: pin })
                console.log(createPinApiResponse.originalArgs);
              } else {
                setValidationError('Please enter a valid 4-digit PIN');
              }
            }}
          />
        </View>

        {/* for space */}
        <View style={{ flex: 0.7 }}></View>

      </View>
    </View>
  );
}

export default CreatePin;
