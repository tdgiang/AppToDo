import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    TextInput
 } from 'react-native';
import styles from '../styles/styles';
 export default class form extends Component {

    constructor(props){
        super(props);
        this.state={
            taskName:''
        }
    }
     
     render() {
         const {form,btnForm,txtBtn,txtInput}=styles;
         const {taskName}=this.state;
         return (
            <View style={form} >
                <TextInput
                    style={txtInput}
                    onChangeText={(val)=>this.setState({taskName:val})}
                    value={taskName}
                    placeholder={'Task name'}
                />

                <TouchableOpacity style={btnForm}  onPress={()=>alert(taskName)} >
                    <Text style={txtBtn} >ADD</Text>
                </TouchableOpacity>

            </View>
             
         );
     }
 }