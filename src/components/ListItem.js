import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  
  renderDescription() {
    const { shouldExpand, description } = this.props;
    if(shouldExpand) {
      return (
        <CardSection>
          <Text> {description}</Text>
        </CardSection>
      );
    }

    return null;
  }
  render() {
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}> 
              {this.props.title} 
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
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


const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibrary === ownProps.id;
  return {
    shouldExpand: expanded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectLibrary: (id) => {
      dispatch({ type: 'CHANGE_SELECTED', selectedId: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
