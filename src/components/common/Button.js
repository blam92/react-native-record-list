import React from 'react';
import { TouchableOpacity, Button as B } from 'react-native';

const Button = ({ color, onPress, title }) => (
    <TouchableOpacity>
      <B color={color} title={title} onPress={onPress} />
    </TouchableOpacity>
);

export { Button };
