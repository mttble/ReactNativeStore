import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import Header from './components/Header'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from './components/Category'
import ProductCard from './components/ProductCard'

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens']

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending Now")
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

        <FlatList 
        data={categories} 
        renderItem={({ item })=>(
          <Category item={item} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}/>)} 
        keyExtractor={(item) => item} 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}/>
        <View style={{ flexDirection:'row'}}>
          <ProductCard/>
          <ProductCard/>
        </View>
        <View style={{ flexDirection:'row'}}>
          <ProductCard/>
          <ProductCard/>
        </View>
        
        {/* <Category/> */}
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
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
        flex: 1,
        fontSize: 20,
        marginLeft: 10,
        width: '80%',
    },
    iconContainer:{
        marginLeft: 10,
    }
})