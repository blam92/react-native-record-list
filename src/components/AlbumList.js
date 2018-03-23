import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

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
      <View>
        <Text>Hello World</Text>
        {this.renderAlbums()}
      </View>
    );
  }
}

const styles = {
  text: {
    fontSize: 20
  }
};

export default AlbumList;
