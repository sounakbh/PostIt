import React, { Component } from 'react';
import { TextInput, 
         StyleSheet, 
         Text, 
         View, 
         ScrollView, 
         TouchableOpacity, 
         KeyboardAvoidingView } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Note from './note';

export default class FlatListBasics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }

  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note 
                key={key} 
                keyval={key} 
                val={val} 
                deleteFunction={() => this.deleteNote(key)}
              />
    })

    return (
      <View style={styles.container}>
        <View style={styles.jumbotron}>
          <Text style={styles.jumbotronText}>
            <SimpleLineIcons name="notebook" size={20} color="white" /> PostIt
          </Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
        <KeyboardAvoidingView style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({noteText: noteText})}
            value={this.state.noteText}
            placeholder=">Tell me something"
            placeholderTextColor="#d1d8e0"
            underlineColorAndroid="transparent">
          </TextInput>
        </KeyboardAvoidingView >
        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote() {
    if(this.state.noteText) {
      this.state.noteArray.push({
        'note': this.state.noteText
      });
      this.setState({noteArray: this.state.noteArray})
    }
    this.setState({noteText: ''});
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray})
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  jumbotron: {
    backgroundColor:'#f7b731',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor:'#ddd',
  },
  jumbotronText: {
    color:'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex:1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#f7b731',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  }
})