import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from './components/Category'
import Header from './components/Header'
import ProductCard from './components/ProductCard'

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens']

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending Now")
  const [isLiked, setIsLiked] = useState(false)
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.container}>
        
        
        <FlatList numColumns={2} 
        ListHeaderComponent={

          <>
            <Header />
            <Text style={styles.matchText}>Match Your Style</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="search" size={26} color="#C0C0C0" />
              </View>
              <TextInput style={styles.textInput} placeholder='Search' placeholderTextColor="#C0C0C0"/>
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
          </>

        }
        data={[1,2,3,4,5,6]} 
        renderItem={({item, index}) => <ProductCard item={item} isLiked={isLiked} setIsLiked={setIsLiked} />}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom:50}}
        />
        
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
        marginVertical: 15,
        marginBottom: 20,
    },
    textInput:{
        flex: 1,
        fontSize: 20,
        marginLeft: 10,
        width: '80%',
        color:'#000000',
    },
    iconContainer:{
        marginLeft: 10,
    }
})