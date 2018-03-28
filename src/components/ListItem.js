import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  renderDescription() {
    alert('description CALLED!');
    if(this.props.selectedId === this.props.id) {
      return (<Text> {this.props.description}</Text>)
    }

    return null;
  }
  render() {
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle} onPress={() => this.props.selectLibrary(this.props.id)}> {this.props.title} </Text>
        {this.renderDescription()}
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 33,
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 15
  }
};

export default ListItem;