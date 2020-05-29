import {StyleSheet} from 'react-native';
import {widthPercentageToDP,heightPercentageToDP} from 'react-native-responsive-screen'

const IndexStyle = StyleSheet.create({
    mainView:{
        width:widthPercentageToDP(100),
        height:heightPercentageToDP(100),
        backgroundColor:'#476ba6'
    }
})

export default IndexStyle;