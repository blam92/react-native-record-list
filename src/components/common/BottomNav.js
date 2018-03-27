import React from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomNav = ({ labelColor, onTabChange, backgroundColor, tabs }) => {
  const tabComponents = tabs.map((tab) => {
    return (
      <Tab
        key={tab.label}
        onPress={tab.onPress}
        barBackgroundColor={backgroundColor}
        label={tab.label}
        icon={<Icon size={24} color={tab.iconColor} name={tab.icon} />}
      />
    );
  });
  return (
  <BottomNavigation
    labelColor={labelColor}
    rippleColor={'#808080'}
    style={{
      height: 56,
      elevation: 8,
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0
    }}
    onTabChange={onTabChange}
  >
  { tabComponents }
  </BottomNavigation>
  );
};

export { BottomNav };
