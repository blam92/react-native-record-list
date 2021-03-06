import React from 'react';
import { View, Platform } from 'react-native'; 

const Card = ({ children }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}> 
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowOpacity: 0.1
      },
      android: {
        elevation: 1
      }
    }),
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
