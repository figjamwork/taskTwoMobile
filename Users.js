import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import {View, Text, StyleSheet, Image, ScrollView, Button, Modal} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import IndividualUser from './IndividualUser';
//import UserAdd from './UserAdd';
import AddUser from './AddUser';
import logo from './logo.png';

const Users = () => {
  const users = useStoreState(state => state.users);
  const fetchUsers = useStoreActions(actions => actions.fetchUsers);
  const [modalOpen, setModalOpen] = useState(false);
 // const navigation = useNavigation(); 

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  
  return (

    <ScrollView>
    <View style={styles.userContainerStyle}>
        <Image source={logo} style={{width:150, height: 100}} resizeMode="contain" />
        <MaterialIcons name="add" size={24} onPress={()=> setModalOpen(true)} />
      
        <Modal visible={modalOpen} animationType='slide'>
          <View style={StyleSheet.modalContent}>
            <MaterialIcons name="close" size={24} onPress={()=> setModalOpen(false)} />
             {/* <Text>Add User</Text> */}
          </View>
          <AddUser />
        </Modal>

        <Text>Users</Text>     
     
      {users.map(user => (
        <IndividualUser user={user} key={user.id} />
      ))}
      
     

<View style={{justifyContent: 'center', flex: 1, width: "100%"}}>
        <Button title="Add User" onPress={()=> setModalOpen(true)} color="green" />
        </View>
    </View> 
    </ScrollView>     
    
  );
};

const styles = StyleSheet.create({
    userContainerStyle: {
      flex: 1,
      margin: 5,
      borderWidth: 2,
      borderRadius: 4,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    modalContent: {

    },
    modalToggle:{}

  });

export default Users;
