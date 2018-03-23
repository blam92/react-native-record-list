import React from 'react';
import { Text, TouchableOpacity, Button as B } from 'react-native';

const Button = ({ color, onPress }) => {
  return (
    <TouchableOpacity>
      <B color={color} title="BUY NOW" onPress={onPress} />
    </TouchableOpacity>
  );
}

export default Button;
