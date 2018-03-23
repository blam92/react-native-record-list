import React from 'react';
import { TouchableOpacity, Button as B } from 'react-native';

const Button = ({ color, onPress }) => (
    <TouchableOpacity>
      <B color={color} title="BUY NOW" onPress={onPress} />
    </TouchableOpacity>
);

export { Button };
