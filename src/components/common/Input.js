import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureText }) => {
  const { inputStyle, containerStyle, labelStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput 
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyle}
        value={value || ''}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    marginRight: 20,
    fontSize: 18,
    lineHeight: 23,
    height: 50,
    flex: 3
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};

export { Input };
