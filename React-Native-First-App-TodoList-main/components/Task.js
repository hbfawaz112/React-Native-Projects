import React from 'react';
import {View , Text , StyleSheet, TouchableOpacity} from 'react-native';


const Task = (props) =>{
    return (
        <View style = {styles.items}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}>

                </TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
           
        </View>
    )
}
const styles = StyleSheet.create({
   items : {
       backgroundColor:'#0f095e',
       padding:15,
       borderRadius:10,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
       marginBottom:20,
   },
   
   itemLeft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'

   },
   square:{
    width:24,
    height:24,
    backgroundColor:'#55BCF6',
    opacity:0.4,
    borderRadius:5,
    marginRight:15, 
   },
   itemText:{
       maxWidth:'80%',
       fontWeight:'bold',
       fontSize:20,
       color:'#fff',

   },
   circular:{
       width:18,
       height:18,
       borderColor:'#ff2bca',
       borderWidth:3,
       borderRadius:8
   },
});

export default Task;