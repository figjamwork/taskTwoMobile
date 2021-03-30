import { StatusBar } from 'expo-status-bar';
import React from 'react';
import model from './model';
import { StoreProvider, createStore} from 'easy-peasy';
import { StyleSheet, Text, View, Button } from 'react-native';

import Users from './Users';

const store = createStore(model);

export default function Home() { 
  
  return (
    <StoreProvider store={store}>         
      <View style={styles.container}>     
       <Users />    
      </View> 
       
    </StoreProvider>   
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
    
  },
});
