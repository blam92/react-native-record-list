import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import AlbumDetail from './AlbumDetail';
import { BottomNav } from './common';

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

  navItems = {
    labelColor: '#827717',
    onTabChange: () => 2,
    backgroundColor: '#CDDC39',
    tabs: [
      {
        onPress: () => 2,
        label: 'Music',
        icon: 'music-note',
        iconColor: '#827717'
      },
      {
        onPress: () => alert('HELLO!'),
        label: 'Tech Stack',
        icon: 'code',
        iconColor: '#827717'
      },
      {
        onPress: this.props.signOut,
        label: 'Sign Out',
        icon: 'power-settings-new',
        iconColor: '#827717'
      }
    ]
  };


  renderAlbums() {
    return this.state.albums.map((album) => <AlbumDetail key={album.title} {...album} />);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
        <BottomNav {...this.navItems} />
      </View>
    );
  }
}

export default AlbumList;
