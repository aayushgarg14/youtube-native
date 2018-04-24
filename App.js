import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons'
import FAIcons from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'

import NavBar from './src/components/NavBar';
import TabBar from './src/components/TabBar';
import VideoContainer from './src/components/VideoContainer';

const API_KEY = 'AIzaSyAaZoWM5DGHOfVT1BRvFKXXF0TFTG-HAjk'
const channelId = 'UCQzdMyuz0Lf4zo4uGcEujFw'
const results = 30

export default class App extends Component {
  state = {
    videos: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const channels = await axios.get(`https://www.googleapis.com/youtube/v3/search/?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`)
      console.log(channels);
      const videos = []
      channels.data.items.forEach(item => {
        videos.push(item)
      })

      this.setState({ videos, loading: false })
    } catch (err) {
      console.log(
        err
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        {
          !this.state.loading
            ? <View style={styles.body}>
              {/* {
                this.state.videos.map(video => {
                  return <VideoContainer key={video.etag} video={video} />
                })

              } */}
              <FlatList
                data={this.state.videos}
                renderItem={(video) => <VideoContainer video={video.item} />}
                keyExtractor={(item) => item.etag}
                ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#e5e5e5'}} />}
              />
            </View>
            : <ActivityIndicator size="small" style={{ flex: 1 }} />
        }
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