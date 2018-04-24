import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons'

class VideoContainer extends Component {
    render() {
        const video = this.props.video
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: video.snippet.thumbnails.medium.url }}
                    style={{ height: 200 }}
                />
                <View style={styles.descriptionContainer}>
                    <Image 
                        source={{ uri: 'https://randomuser.me/api/portraits/men/0.jpg' }}
                        style={{ width: 50, height: 50, borderRadius: 25 }}
                    />
                    <View style={styles.videoDetails}>
                        <Text numberOfLines={2} style={styles.videoTitle}>{video.snippet.title}</Text>
                        <Text>{`${video.snippet.channelTitle} ·`}</Text>
                    </View>
                    <TouchableOpacity>
                        <MIcons name="more-vert" size={20} color="#999999" /> 
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    descriptionContainer: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    videoDetails: {
        paddingHorizontal: 15,
        flex: 1,
    },
    videoTitle: {
        fontSize: 16,
        color: '#3c3c3c'
    }
});

export default VideoContainer;
