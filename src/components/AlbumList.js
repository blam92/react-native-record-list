import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import AlbumDetail from './AlbumDetail';
import { BottomNav } from './common';

class AlbumList extends Component {
  state = { 
    albums: []
  }

  componentDidMount() {
    this.props.dispatch({ type: 'SHOW_MUSIC' });

    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((res) => res.json())
    .then((data) => {
      this.setState({ albums: data });
    })
    .catch((err) => console.log(err));
  }

  renderAlbums() {
    return this.state.albums.map((album) => <AlbumDetail key={album.title} {...album} />);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
        <BottomNav {...this.props.navItems} />
      </View>
    );
  }
}

export default connect()(AlbumList);
