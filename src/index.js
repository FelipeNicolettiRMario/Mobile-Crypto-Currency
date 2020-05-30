import React,{useState} from 'react';
import {View,Text} from 'react-native';
import IndexStyle from './Style'
import List from './components/List'
import Price from './components/Price'

export default function Index(){
    const [selectedCoin,setSelectedCoin] = useState(null);

    return (
        <View style={IndexStyle.mainView}>
            <List
                setSelectedCoin = {setSelectedCoin}
            />
            <Price
                coin = {selectedCoin}
            />
        </View>
    );
}
