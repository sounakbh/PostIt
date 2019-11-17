import React, { Component } from 'react';
import { TextInput, 
         StyleSheet, 
         Text, 
         View, 
         ScrollView, 
         TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default class FlatListBasics extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>
          {this.props.val.note}
        </Text>

        <TouchableOpacity onPress={this.props.deleteFunction} style={styles.noteDelete}>
          <AntDesign name="delete" color="white" />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
      position: 'relative',
      padding: 20,
      paddingRight:100,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
  },
  noteText: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#f7b731',
  },
  noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#a55eea',
      padding: 10,
      top: 10,
      bottom: 5,
      right: 10
  },
})