import React from "react";
import { useStoreActions } from "easy-peasy";
import {View, StyleSheet, Text, Button, Dimensions} from 'react-native';
import EditUser from './EditUser';

const IndividualUser = ({ user }) => {
  const { remove, edit } = useStoreActions(actions => ({
    remove: actions.remove,
    edit: actions.toggle
  }));


  const editTheUser = () =>{
    <EditUser />
  }

  return (

    <View style={styles.individualUserStyle}>
        <View style={{ flex: 3}}>
            
        <Text style={styles.textStyle}>Name: {user.name}</Text>        
        <Text style={styles.textStyle}>Email: {user.email}</Text>        
        <Text style={styles.textStyle}>Username: {user.username}</Text>
        <Text style={styles.textStyle}>Phone: {user.phone}</Text>
        <Text style={styles.textStyle}>Website: {user.website}</Text>
        </View>
      
        <View style={{flex: 2, margin: 5 }} >
            <View style={{borderRadius: 50}}> 
            <Button title="Delete" color="red" onPress={() => remove(user.id)} />
            </View>
                              
            <View />
            <View />
            <Button style={{borderRadius: 20}}title="Edit" color="gray" onPress= {editTheUser} />
 

          
        </View>
        
        
        
    </View>
    
  );
};

const styles = StyleSheet.create({
    individualUserStyle: {
      flex: 1,
      flexDirection: 'row',
      margin: 5,
      borderWidth: 2,
      borderRadius: 4,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      width: "100%"
    },
    textStyle: {
        fontSize: 10,
        fontWeight: "bold",
    }
  });



export default IndividualUser;
