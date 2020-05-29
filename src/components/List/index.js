import React,{useState} from 'react';
import {View,FlatList,Text,TouchableOpacity} from 'react-native';
import Style from './style'

function ItemList({name}){
    return (
        <TouchableOpacity style={Style.item}>
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

export default function List(){
    const [cryptoList,setCryptoList] = useState([{"name":"BTC","id":"1"},{"name":"ETH","id":"2"},{"name":"NAN","id":"3"},{"name":"NAN","id":"4"}]);

    return(
        <View style={Style.container}>
            <FlatList
                data = {cryptoList}
                renderItem = {({item})=> <ItemList name={item.name}/>}  
                keyExtractor = {item => item.id}
            />
        </View>
    )
}