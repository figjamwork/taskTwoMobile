import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import {Alert, TextInput, View, Text, Button, StyleSheet} from 'react-native';
//import Users from './Users';

const EditUser = () => {

     const [name, setName] = useState("");
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
 //    const [address, setAddress] = useState("");
     const [phone, setPhone] = useState("");
     const [website, setWebsite] = useState("");
//     const [company, setCompany] = useState("");
   
const add = useStoreActions(actions => actions.add);

const nameChanged = (val) => { 
  setName(val);
};
const phoneChanged = (val) => { 
  setPhone(val);
};
const websiteChanged = (val) => { 
  setWebsite(val);
};
const userNameChanged = (val) => { 
  setUsername(val);
};
const emailChanged = (val) => { 
  setEmail(val);
};

const userAdded = () => {
  
  if (name.trim() === '') {
      alert("Please fill in all fields");
      return;
  };  
  if (website.trim() === '') {
    alert("Please type in the website properly");
    return;
}; 
  if (email.trim() === '') {
    alert("Please enter your email in the correct format");
    return;
  };  
  if (username.trim() === '') {
    alert("Please fill in all fields");
    return;
  };  
  if (phone.trim() === '') {
    alert("Please enter your phone number properly not letters");
    return;
  }; 
  
  add({ name, email, username, website, phone });    
  setName(''); 
  setUsername('');
  setEmail('');
  setWebsite('');
  setPhone('');

  alert("User Added");
  return;
};

  return (

    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}> Name:  </Text> 
        <TextInput placeholder="Enter your name"
            value={name} style={{borderColor:"gray", borderWidth: 2}} 
            onChangeText={nameChanged} 
            style={{width: 225, height: 25, borderColor: 'black', borderRadius: 4, borderWidth: 2, padding: 5}}
        />
      </View> 

     
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}> Username:  </Text> 
        <TextInput placeholder="Enter your prefered username"
            value={username} style={{borderColor:"gray", borderWidth: 2}} 
            onChangeText={userNameChanged} 
            style={{width: 225, height: 25, borderColor: 'black', borderRadius: 4, borderWidth: 2, padding: 5}}
        />
      </View>      

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}> Email:  </Text> 
        <TextInput placeholder="Enter your email"
            value={email} style={{borderColor:"gray", borderWidth: 2}} keyboardType="email-address"
            onChangeText={emailChanged}             
            style={{width: 190, height: 25, borderColor: 'black', borderRadius: 4, borderWidth: 2, padding: 5}}
        />
      </View> 

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}> Phone Number:  </Text> 
        <TextInput placeholder="Enter your Phone number"
            value={phone} style={{borderColor:"gray", borderWidth: 2}} keyboardType="phone-pad"
            onChangeText={phoneChanged}             
            style={{width: 190, height: 25, borderColor: 'black', borderRadius: 4, borderWidth: 2, padding: 5}}
        />
      </View> 

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}> Website:  </Text> 
        <TextInput placeholder="Enter your Website"
            value={website} style={{borderColor:"gray", borderWidth: 2}} keyboardType="url"
            onChangeText={websiteChanged}             
            style={{width: 190, height: 25, borderColor: 'black', borderRadius: 4, borderWidth: 2, padding: 5}}
        />
      </View> 

      


   
  
     
       
     

      <View style={{justifyContent: 'center', flex: 1, width: "100%"}}>
          <Button title="Add User" onPress={userAdded} color="green" />
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //flexDirection: 'row',
      margin: 10,
      borderWidth: 2,
      borderRadius: 4,
      backgroundColor: 'lightgreen',
      //alignItems: 'center',
      //justifyContent: 'center',
      padding: 10,
      //width: "100%"
    },
    textStyle: {
        fontSize: 10,
        fontWeight: "bold",
    }
  });

export default EditUser;
