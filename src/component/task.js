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
import setAsyncStorage from '../api/setAsyncStorage';
class task extends Component {  

    onDeleteTask=(id)=>{ 
        this.props.deleteTask(id);
        newData=this.props.ArrTask.filter(e=>e.id!=id)
        setAsyncStorage(newData);  
    }

    onToggleFinsish=(id)=>{
        this.props.toggleFinish(id);
        newData=this.props.ArrTask.map(e=>{
            if(e.id!=id) return e;
            return {...e,finish:!e.finish}
        })
        setAsyncStorage(newData);

    }

     render() {
        const {imgIcon,containerTask,boxTask}=styles
        const {finish,taskName,id} =this.props.task;
        const iconFinish=finish?clock:ok;
         return (
             <View style={containerTask} >
                <TouchableOpacity onPress={()=>this.onToggleFinsish(id)} >
                    <Image source={iconFinish} style={imgIcon}  />
                </TouchableOpacity>
                <View style={boxTask} >
                    <Text style={{fontSize:15}} >{taskName} </Text>
                </View>
                <TouchableOpacity   onPress={()=>this.onDeleteTask(id)}  >
                    <Image source={cancel} style={imgIcon}/>
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


 export default connect(mapStateToProps,{toggleFinish,deleteTask})(task);