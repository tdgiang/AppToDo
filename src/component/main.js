import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
import Form from './form';
import styles from '../styles/styles';
import Task from './task';
export default class Main extends Component {
     render() {
         const {header,body,title,txtTitle}=styles;
         return (
            <View style={{flex:1}} >
                <View style={header} >
                    <View style={title} >
                        <Text style={txtTitle} >To Do App</Text>
                    </View>
                    <Form />
                </View>

                <View style={body} >
                    <Task />
                </View>

            </View>
             
         );
     }
 }