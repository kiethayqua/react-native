import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HinhCN from './components/HinhCN.js';
class App extends Component{
  render(){
    return (
      <View>
        <Khoi />
        <Khoi />
        <HinhCN />
      </View>
    );
  }
}

// C1 : khai bao cac Component truc tiep trong file chay chuong trinh
// C2: khai bao cac Component trong folder components
export class Khoi extends Component{
  render(){
    return(
      <View style={styles.abc}></View>
    );
  }
}



export default App;

var styles = StyleSheet.create({
  abc:{
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderWidth: 1,
  }
});
