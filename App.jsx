import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize :30}}> Praful Mobile App developer
           </Text>
           <Text style={{fontSize :30}}> Flutter Mobile App developer
           </Text>
           <Button title='Press Here'/>
      </View>
    )
  }
}
