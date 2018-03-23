import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ title }) => (
  <Card>
    <CardSection>
      <Text style={{ fontSize: 20 }}>{ title }</Text>
    </CardSection>
  </Card>
);

export default AlbumDetail;