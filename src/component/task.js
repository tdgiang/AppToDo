import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native';
 import {connect} from 'react-redux';
import {toggleFinish,deleteTask} from '../redux/actionCreator';
 import styles from '../styles/styles';
const cancel=require('../img/icon/cancel.png');
const clock=require('../img/icon/clock.png');
const ok=require('../img/icon/ok.png');

class task extends Component {  
     render() {
        const {imgIcon,containerTask,boxTask}=styles
        const {finish,taskName,id} =this.props.task;
        const iconFinish=finish?clock:ok;
         return (
             <View style={containerTask} >
                <TouchableOpacity onPress={()=>this.props.toggleFinish(id)} >
                    <Image source={iconFinish} style={imgIcon}  />
                </TouchableOpacity>
                <View style={boxTask} >
                    <Text style={{fontSize:15}} >{taskName}+{id}</Text>
                </View>
                <TouchableOpacity   onPress={()=>this.props.deleteTask(id)}  >
                    <Image source={cancel} style={imgIcon}/>
                </TouchableOpacity>
             </View>
         );
     }
 }

 export default connect(null,{toggleFinish,deleteTask})(task);