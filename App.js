import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import  Header  from './componentes/Header';

export default class App extends React.Component {
  render() {
    return(
      <View style={{marginTop:20, padding:30}}>
        <Header></Header>
      </View>
    );
  }
}

