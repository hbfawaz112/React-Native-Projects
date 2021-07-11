import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task , setTask] = useState();

  const [taskItems , setTaskItems] = useState([]);
  
  const handleAddTask = () =>{
   // console.log(task);
   Keyboard.dismiss();
   setTaskItems([...taskItems,task])
   setTask(null);

  }

  const completTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/* Todays task*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
            {/*this is where the task */}
           {
             taskItems.map((item, index) =>{
             return (
             <TouchableOpacity  key={index} onPress={()=>completTask(index)}>
                <Task text={item} />
             </TouchableOpacity>
             );
            
             })
           } 
          
            
            
        </View>
      </View>
      {/*Write a task form input */}
      <KeyboardAvoidingView behavior={Platform.OS==="ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#114696',
    
  },
  taskWrapper:{
    paddingTop:65,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:27,
    color:"#FFF",
    fontWeight:'bold'
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'93%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:20,
    
    },
    input:{
      width:250,
      height:52,
      paddingHorizontal:25,
      paddingVertical:15,
      backgroundColor:"#FFF",
      borderRadius:60,
      borderColor:'#C0C0C0C0',
      borderWidth:2,
    },
    addWrapper:{
      width:51,
      height:51,
      backgroundColor:"#ff2bca",
      borderRadius:60,
      alignItems:'center',
      justifyContent:'center',
      borderColor:"#fff",
      borderWidth:1,
    },
    addText:{
      fontSize:40,
      color:"#fff",
      fontWeight:'bold',
    }

});
