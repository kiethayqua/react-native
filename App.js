import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HinhCN from './components/HinhCN.js';

// STATE de cap nhat trang thai ngay khi thuc hien hanh dong
// khoi tao trong constructor
// this.state de khoi tao cac STATE
// this.setState de cai dat cac state
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      so: 999
    }
  }

  showClick(){
    console.log('CLICKED!');
    this.setState({
      so: this.state.so + 1
    });
  }

  render(){
    return (
      <View>
        <Text style={{fontSize: 100}}>{this.state.so}</Text>
        <TouchableOpacity onPress={()=>{this.showClick()}}>
          <View style={{backgroundColor: 'red', width: 50, height: 20}}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



export default App;
