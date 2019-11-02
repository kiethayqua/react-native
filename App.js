import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HinhCN from './components/HinhCN.js';

// TouchableOpacity tuong tac voi nguoi dung
// bao the TouchableOpacity ben ngoai khoi muon xu li cham man hinh
// Dung thuoc tinh onPress={()={}} xu li su kien cham vao man hinh
class App extends Component{
  showClick(){
    console.log('CLICKED!')
  }

  render(){
    return (
      <View>
        <TouchableOpacity onPress={()=>{this.showClick()}}>
          <View style={{backgroundColor: 'green', width: 200, height: 50, marginTop: 30}}>
            <Text>Click me</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



export default App;
