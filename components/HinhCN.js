import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class HinhCN extends Component{
  render(){
    return(
      <View style={styles.ve}>
        <Text>Componet ngoai</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  ve:{
    width: 100,
    height: 50,
    backgroundColor: 'blue',
  }
});
