import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Card, Button, CardSection } from './common';


const AlbumDetail = ({ title, artist, thumbnail_image, image, url }) => {
  const { 
    thumbnailStyle,
    headerContentStyle, 
    thumbnailContainerStyle,
    headerFontSize,
    imageStyle,
    centerElements
   } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerFontSize}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <View style={centerElements}>
          <Button color={'#827717'} onPress={() => Linking.openURL(url)} />
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerFontSize: {
    fontSize: 20
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  centerElements: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
};

export default AlbumDetail;
