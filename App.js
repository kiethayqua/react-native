import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HinhCN from './components/HinhCN.js';

class App extends Component{
  render(){
    return (
      <View>
        <KhachHang hoten="Nguyen Phuc Kiet"/>
        <HinhCN yourname="Kiet" hername="Vy"/>
      </View>
    );
  }
}

// C1: truyen tham so cho Component ben trong file chinh
// de truyen tham so can {this.props.<[ten_thuoc_tinh]>}
// C2: truyen tham so cho Component ben ngoai file chinh (phuc tap hon)
export class KhachHang extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'yellow', padding: 10}}>
        <Text>{this.props.hoten}</Text>
      </View>
    );
  }
}

export default App;
