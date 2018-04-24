import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons'
import FAIcons from 'react-native-vector-icons/FontAwesome'

const tabBarList = [
    { icon: 'home', title: 'Home' },
    { icon: 'whatshot', title: 'Trending' },
    { icon: 'subscriptions', title: 'Subscriptions' },
    { icon: 'notifications-active', title: 'Activity' },
    { icon: 'folder', title: 'Library' },
]

class TabBar extends Component {
    render() {
        return (
            <View style={styles.tabBar}>
                {
                    tabBarList.map((tabBarListItem, key) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.tabBarItem}>
                            <MIcons name={tabBarListItem.icon} size={25} />
                            <Text style={styles.tabBarItemText}>{tabBarListItem.title}</Text>
                        </TouchableOpacity>
                    ))
                }
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
