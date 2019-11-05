import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = (text) =>{
        this.setState({text: text});
    }

    handleSubmitEditing = ()=>{
        var {onSubmit} = this.props;
        var {text} = this.state;

        if(!text) return;

        onSubmit(text);
        this.setState({text: ''});
    }

    render(){
        var {text} = this.state;

        return(
            <View style={styles.container}>
                <TextInput 
                    autoCorrect= {false}
                    value= {text}
                    placeholder= {this.props.placeholder}
                    placeholderTextColor= 'white'
                    underlineColorAndroid= 'transparent'
                    style= {styles.textInput}
                    clearButtonMode= 'always'
                    onChangeText= {this.handleChangeText}
                    onSubmitEditing= {this.handleSubmitEditing}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        height: 40,
        width: 200,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput:{
        flex: 1,
        color: 'white',
    },
});