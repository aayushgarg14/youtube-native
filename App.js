import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons'
import FAIcons from 'react-native-vector-icons/FontAwesome'
import NavBar from './src/components/NavBar';
import TabBar from './src/components/TabBar';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <View style={styles.body}>

        </View>
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1
  },
});