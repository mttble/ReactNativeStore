import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import Header from './components/Header'
import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.container}>
        <Header />
        <Text style={styles.matchText}>Match Your Style</Text>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
          <Fontisto name="search" size={26} color="#C0C0C0" />
          </View>
          <TextInput style={styles.textInput} placeholder='Search'/>
        </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    matchText:{
        fontSize: 28,
        color: '#000000',
        marginTop: 25,
    },
    inputContainer:{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        height: 48,
        marginVertical: 10,
    },
    textInput:{
        fontSize: 20,
        marginLeft: 10,
        width: '80%',
    },
    iconContainer:{
        marginLeft: 10,
    }
})