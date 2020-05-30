import React,{useState,useEffect} from 'react';
import {View,Image,Text} from 'react-native';
import Styles from './Style';
import Style from './Style';
import api from '../../services/api';

export default function Price({coin}) {

    if(coin == null){
        return <View></View>
    }

    const cryptoDict = {"Bitcoin":"BTC","Monero":"XMR","Litecoin":"LTC","Etherum":"ETH"}

    const [ticker,setTicker] = useState({"ticker":{"price":0}});

    useEffect(()=>{
        async function getTicker() {
            const response = await api.get(`${cryptoDict[coin]}-usd`);
            if(response.err) throw err;
        
            else setTicker(response.data);
        }
        getTicker();
        console.log(ticker)
    },[coin])

    return (
        <>
        <View style={Styles.generalContainer}>
            <View style={Styles.container}>
                <Image
                    source = {{uri:`https://raw.githubusercontent.com/FelipeNicolettiRMario/Mobile-Crypto-Currency/dev/assets/icons/${coin}.png`}}
                    style = {Styles.image}
                />
            </View>
            <Text style={Style.text}>{coin}</Text>
        </View>
        <Text style={Style.priceText}>Price:{Math.round(ticker.ticker.price*100)/100} USD</Text>
        </>
    )
}