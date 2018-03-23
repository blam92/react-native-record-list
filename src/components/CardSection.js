import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
};

export default CardSection;
