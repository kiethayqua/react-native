import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import SearchInput from './components/SearchInput';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      location: 'San Francisco',
    };
  }

  hadleUpdateLocation = city =>{
    this.setState({
      location: city,
    });
  }

  render() {
    var {location} = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">

        <ImageBackground source={require('./utils/getImageForWeather/Clear.jpg')} style={styles.imageContainer} imageStyle={styles.image}>
          <View style={styles.detailContainer}>
          <Text style={styles.largeText}>{location}</Text>
          <Text style={styles.smallText}>Light Cloud</Text>
          <Text style={styles.largeText}>24°</Text>

          <SearchInput placeholder='Search a city' onSubmit={this.hadleUpdateLocation}/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  detailContainer:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 20,
  },
  smallText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'white',
  },
  largeText: {
    fontSize: 30,
    color: 'white',
  },
  imageContainer:{
    flex: 1,
  },
  image:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
});