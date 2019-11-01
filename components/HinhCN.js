import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';


// cu phap {this.props.<[ten_thuoc_tinh]>}
/* Can khai bao ben ngoai class cu phap:
<ten_class>.propType = {
  <thuoc_tinh_1>:React.PropTypes,
  <thuoc_tinh_2>:React.PropTypes,...
}
*/
export default class HinhCN extends Component{
  render(){
    return(
      <View style={styles.ve}>
        <Text>{this.props.yourname} - {this.props.hername}</Text>
      </View>
    );
  }
}

HinhCN.propType = {
  yourname: React.PropTypes,
  hername: React.PropTypes
}


var styles = StyleSheet.create({
  ve:{
    width: 100,
    height: 50,
    backgroundColor: 'blue',
  }
});
