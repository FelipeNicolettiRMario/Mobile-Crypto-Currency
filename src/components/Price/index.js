import React,{useState,useEffect} from 'react';
import {View,Image,Text} from 'react-native';
import Styles from './Style'
import Style from './Style';

export default function Price({coin}) {

    if(coin == null){
        return <View></View>
    }

    return (

        <View style={Styles.generalContainer}>
            <View style={Styles.container}>
                <Image
                    source = {{uri:`https://raw.githubusercontent.com/FelipeNicolettiRMario/Mobile-Crypto-Currency/dev/assets/icons/${coin}.png`}}
                    style = {Styles.image}
                />
            </View>
            <Text style={Style.text}>{coin}</Text>

        </View>

    )
}