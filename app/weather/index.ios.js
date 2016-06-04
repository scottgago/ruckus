/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  MapView,
  View
} from 'react-native';
import fetchWeather from './src/api.js';

class weather extends Component {
  constructor(props) {
    super(props)
    this.state= {
      pin: {
        latitude: 0,
        longitude: 0
      },
      initialPosition: '',
      lastPosition: '',
      watchId: ''
     }
  }

  onRegionChangeComplete(region) {
    if(this.state.initialPosition !== '')
    this.setState({pin: {
      longitude: region.longitude,
      latitude: region.latitude
    }})
  }

    // fetchWeather(region.longitude, region.latitude).then((data) => {
    //   console.log(data);
    //   this.setState(data)})

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position;
        this.setState({initialPosition});
        this.setState({pin: {
          longitude: initialPosition.coords.longitude,
          latitude: initialPosition.coords.latitude
        }})
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.state.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.state.watchID);
  }

  render() {

    return (
      <View style= {styles.container}>
        <MapView annotations= {[this.state.pin]} onRegionChangeComplete= {this.onRegionChangeComplete.bind(this)} style= {styles.map}>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 2,
    marginTop: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => weather);
