import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component{
  render(){
    return (
      <View style={styles.bao}>
        <View style={styles.hang}>
          <View style={styles.cot}>
            <Text>1</Text>
          </View>
          <View style={styles.cot}>
            <Text>2</Text>
            <Text>ABC</Text>
          </View>
          <View style={styles.cot}>
            <Text>3</Text>
            <Text>DEF</Text>
          </View>
        </View>
        <View style={styles.hang}>
        <View style={styles.cot}>
            <Text>4</Text>
            <Text>GHI</Text>
          </View>
          <View style={styles.cot}>
            <Text>5</Text>
            <Text>JKL</Text>
          </View>
          <View style={styles.cot}>
            <Text>6</Text>
            <Text>MNO</Text>
          </View>
        </View>
        <View style={styles.hang}>
        <View style={styles.cot}>
            <Text>7</Text>
            <Text>PQRS</Text>
          </View>
          <View style={styles.cot}>
            <Text>8</Text>
            <Text>TUV</Text>
          </View>
          <View style={styles.cot}>
            <Text>9</Text>
            <Text>WXYZ</Text>
          </View>
        </View>
        <View style={styles.hang}>
        <View style={styles.cot}>
            <Text>*</Text>
          </View>
          <View style={styles.cot}>
            <Text>0</Text>
          </View>
          <View style={styles.cot}>
            <Text>#</Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  bao:{
    marginTop: 50,
    flex: 1,
    backgroundColor: 'grey',
  },
  hang:{
    flex: 1,
    flexDirection: 'row',
  },
  cot:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    justifyContent: 'center',
  }
});



export default App;
