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
import setAsyncStorage from '../api/setAsyncStorage';
 class form extends Component {

    constructor(props){
        super(props);
        this.state={
            taskName:''
        }
    }
    
    onPressAddTask=async()=>{
        await this.props.addTask(this.state.taskName);
        this.setState({taskName:''});
        setAsyncStorage(this.props.ArrTask);

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

                <TouchableOpacity style={btnForm} onPress={()=>this.onPressAddTask()} >
                    <Text style={txtBtn} >ADD</Text>
                </TouchableOpacity>

            </View>
             
         );
     }
 }

const mapStateToProps = (state) => {
    return {
        ArrTask: state
    }
}

 export default connect(mapStateToProps,{addTask})(form);