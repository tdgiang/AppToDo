import React, { Component } from 'react';
import { 
    View,
    Text,
    FlatList
 } from 'react-native';
import Form from './form';
import styles from '../styles/styles';
import Task from './task';
import {connect} from 'react-redux';
import {getInitData} from '../redux/actionCreator';

import getAsyncStorage from '../api/getAsyncStorage';

class Main extends Component {

    UNSAFE_componentWillMount (){  
       getAsyncStorage()
       .then(res=>{
           console.log(res);
           this.props.getInitData(res);
       })
       .catch(err=>{
           console.log(err);
           return [];
           
       }
       )
    }

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
                    <FlatList
                        data={this.props.ArrTask}
                        renderItem={({item})=><Task task={item} />}

                    />
                </View>

            </View>
             
         );
     }
 }
 const mapStateToProps = (state) => {
     return {
         ArrTask: state
     }
 }

 export default  connect(mapStateToProps,{getInitData})(Main);