import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons'
import FAIcons from 'react-native-vector-icons/FontAwesome'

class NavBar extends Component {
    render() {
        return (
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
        );
    }
}

const styles = StyleSheet.create({
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
});

export default NavBar;
