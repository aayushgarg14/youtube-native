import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons'
import FAIcons from 'react-native-vector-icons/FontAwesome'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.leftNav}>
            <FAIcons name="youtube-square" size={25} color="red" />
            <Text style={styles.leftNavText}>YouTube</Text>
          </View>
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <MIcons style={styles.rightNavItem} name="videocam" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MIcons style={styles.rightNavItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MIcons style={styles.rightNavItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>

        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabBarItem}>
            <MIcons name="home" size={25} />
            <Text style={styles.tabBarItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBarItem}>
            <MIcons name="whatshot" size={25} />
            <Text style={styles.tabBarItemText}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBarItem}>
            <MIcons name="subscriptions" size={25} />
            <Text style={styles.tabBarItemText}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBarItem}>
            <MIcons name="notifications-active" size={25} />
            <Text style={styles.tabBarItemText}>Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBarItem}>
            <MIcons name="folder" size={25} />
            <Text style={styles.tabBarItemText}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 48,
    backgroundColor: '#ffffff',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftNavText: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  rightNav: {
    flexDirection: 'row',
  },
  rightNavItem: {
    marginLeft: 25,
  },
  body: {
    flex: 1
  },
  tabBar: {
    height: 48,
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderTopColor: '#e8e8e8',
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarItemText: {
    fontSize: 10,

  }
});