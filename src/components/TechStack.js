import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { BottomNav } from './common';
import ListItem from './ListItem';

const TechStack = ({ navItems, libraries, selectedId, selectLibrary }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={libraries}
      renderItem={({ item }) => 
        <ListItem {...item} selectedId={selectedId} selectLibrary={selectLibrary} />
      }
      keyExtractor={item => item.id.toString()}
    />
    <BottomNav {...navItems} />
  </View>
);

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries,
    selectedId: state.selectedLibrary
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectLibrary: (id) => {
      dispatch({ type: 'CHANGE_SELECTED', selectedId: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TechStack);
