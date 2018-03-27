import React, { Component } from 'react';
import { DrawerLayoutAndroid, View, Text } from 'react-native';

class Drawer extends Component {
  componentDidMount() {
    this.drawer.openDrawer();
  }
  render() {
    const navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid 
        ref={drawer => this.drawer = drawer}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
};

export { Drawer };
