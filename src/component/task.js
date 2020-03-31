import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native';

 import styles from '../styles/styles';
const cancel=require('../img/icon/cancel.png');
const clock=require('../img/icon/clock.png');
const ok=require('../img/icon/ok.png');

 export default class task extends Component {
      
     render() {
         const {imgIcon,containerTask,boxTask}=styles
         return (
             <View style={containerTask} >
                <TouchableOpacity>
                    <Image source={ok} style={imgIcon}  />
                </TouchableOpacity>
                <View style={boxTask} >
                    <Text style={{fontSize:15}} >Learing English</Text>
                </View>
                <TouchableOpacity  >
                    <Image source={cancel} style={imgIcon} />
                </TouchableOpacity>
             </View>
         );
     }
 }