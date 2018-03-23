import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const AlbumDetail = ({ title }) => (
  <Card>
    <Text>{ title }</Text>
  </Card>
);

export default AlbumDetail;