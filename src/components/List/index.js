import React,{useState} from 'react';
import {View,FlatList,Text,TouchableOpacity} from 'react-native';
import Style from './style'

function ItemList({name,setSelectedCoin}){
    return (
        <TouchableOpacity 
            style={Style.item}
            onPress = {()=>setSelectedCoin(name)}
        >
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

export default function List({setSelectedCoin}){
    const [cryptoList,setCryptoList] = useState([{"name":"Bitcoin","id":"1"},{"name":"Etherum","id":"2"},{"name":"Litecoin","id":"3"},{"name":"Monero","id":"4"}]);

    return(
        <View style={Style.container}>
            <FlatList
                data = {cryptoList}
                renderItem = {({item})=> <ItemList name={item.name} setSelectedCoin={setSelectedCoin}/>}  
                keyExtractor = {item => item.id}
            />
        </View>
    )
}