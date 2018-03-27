import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import AlbumDetail from './AlbumDetail';
import { Button, BottomNav } from './common';

class AlbumList extends Component {
  state = { 
    albums: []
  }

  componentDidMount() {
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
        <Button title={'Log Out'} onPress={this.props.signOut} color={'#827717'} />
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
        <BottomNav />
      </View>
    );
  }
}

export default AlbumList;
