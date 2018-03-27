import React from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomNav = () => {
  return (
    <BottomNavigation
    labelColor="#808080"
    rippleColor="white"
    style={{
      height: 56,
      elevation: 8,
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0
    }}
    onTabChange={newTabIndex => alert(`New Tab at position ${newTabIndex}`)}
  >
    <Tab
      barBackgroundColor="#CDDC39"
      label="Movies & TV"
      icon={<Icon size={24} color="#808080" name="tv" />}
    />
    <Tab
      barBackgroundColor="#CDDC39"
      label="Music"
      icon={<Icon size={24} color="#808080" name="music-note" />}
    />
    <Tab
      barBackgroundColor="#CDDC39"
      label="Books"
      icon={<Icon size={24} color="#808080" name="book" />}
    />
    <Tab
      barBackgroundColor="#CDDC39"
      label="Newsstand"
      icon={<Icon size={24} color="#808080" name="assistant" />}
    />
  </BottomNavigation>
  );
}

export { BottomNav };
