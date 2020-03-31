import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    TextInput
 } from 'react-native';
import styles from '../styles/styles';
import {connect} from 'react-redux';
import {addTask} from '../redux/actionCreator';

 class form extends Component {

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

                <TouchableOpacity style={btnForm} onPress={()=>this.props.addTask(taskName)}  >
                    <Text style={txtBtn} >ADD</Text>
                </TouchableOpacity>

            </View>
             
         );
     }
 }

 export default connect(null,{addTask})(form);