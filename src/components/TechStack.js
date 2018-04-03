import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { BottomNav } from './common';
import ListItem from './ListItem';

class TechStack extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'SHOW_TECHSTACK' });
  }

  render() {
    const { navItems, libraries } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={libraries}
          renderItem={({ item }) => 
            <ListItem {...item} />
          }
          keyExtractor={item => item.id.toString()}
        />
        <BottomNav {...navItems} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries,
    selectedId: state.selectedLibrary
  };
};

export default connect(mapStateToProps)(TechStack);
