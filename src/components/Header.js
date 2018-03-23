import React from 'react';
import { Text, View, Platform } from 'react-native';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};


const styles = {
  textStyle: {
    fontSize: 30
  },
  viewStyle: {
    backgroundColor: '#CDDC39',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2
      },
      android: {
        elevation: 9
      }
    })
  }
};
export default Header;
