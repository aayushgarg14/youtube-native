import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons'
import FAIcons from 'react-native-vector-icons/FontAwesome'

class TabBar extends Component {
    render() {
        return (
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
        );
    }
}

const styles = StyleSheet.create({
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

export default TabBar;
