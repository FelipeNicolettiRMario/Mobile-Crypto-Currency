import React from 'react';
import {View,Text} from 'react-native';
import IndexStyle from './Style'
import List from './components/List'

export default function Index(){
    return (
        <View style={IndexStyle.mainView}>
            <List/>
        </View>
    );
}
