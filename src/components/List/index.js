import React,{useState} from 'react';
import {View,FlatList,Text} from 'react-native';
import Style from './style'

function ItemList({name}){
    return (
        <View style={Style.item}>
            <Text>{name}</Text>
        </View>
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