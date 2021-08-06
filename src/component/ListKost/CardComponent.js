import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

export const CardComponent = props =>{
    return (
      <Card warning style={styles.itemBaris}>
      <Card.Content>
        <Title numberOfLines={1} style={styles.title}>{props.name}</Title>
      </Card.Content>
      <Card.Content>
      </Card.Content>
      <Card.Content>
        <Title style={styles.title}>{props.available}</Title>
      </Card.Content>
      
    </Card>
    );
  };

export default CardComponent;

const styles = StyleSheet.create({
  itemBaris: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 10,
    backgroundColor:'white',

  },
  title: {
    color: '#66a5ad',
    fontWeight: 'bold',
    fontSize: 15,
  },
  how: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 19,
    paddingLeft: 20,
  },
});
