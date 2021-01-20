
import Constants from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';


export default function App() {
  return (
    <View style={styles.container}>
      <TodoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
