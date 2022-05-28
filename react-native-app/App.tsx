import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeModules, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>React Native Demo Home page</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>You have pushed the button this many times:</Text>
        <Text style={styles.count}>{count}</Text>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
          }}
          style={styles.button}
        >
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: NativeModules.StatusBarManager.HEIGHT,
    padding: 16,
    backgroundColor: '#2196f3',
    elevation: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  count: {
    fontSize: 32,
    color: 'gray'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    position: 'absolute',
    bottom: 12,
    right: 12,
    height: 64,
    backgroundColor: '#2196f3',
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
