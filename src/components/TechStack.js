import React from 'react';
import { View, Text } from 'react-native';
import { BottomNav } from './common';

const TechStack = ({ navItems }) => (
  <View style={{ flex: 1 }}>
    <Text>
      Hello Tech Stack!
    </Text>
    <BottomNav {...navItems} />
  </View>
);

export default TechStack;
