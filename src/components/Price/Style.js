import {StyleSheet} from 'react-native'
import {widthPercentageToDP,heightPercentageToDP} from 'react-native-responsive-screen'

export default StyleSheet.create({
    container:{
        marginTop:heightPercentageToDP(15),
        marginLeft:widthPercentageToDP(15),
        height:heightPercentageToDP(2)

    },
    image:{
        width:widthPercentageToDP(30),
        height:heightPercentageToDP(15),
        marginLeft:widthPercentageToDP(-13),
        marginTop:heightPercentageToDP(-14)
    },
    generalContainer:{
        backgroundColor:'white',
        width:widthPercentageToDP(80),
        marginTop:heightPercentageToDP(8),
        marginLeft:widthPercentageToDP(10),
        flexDirection:'row',
        borderRadius:30
    },
    text:{
        marginLeft:widthPercentageToDP(8),
        fontSize:20,
    },
    priceText:{
        marginTop:heightPercentageToDP(-8),
        paddingLeft:widthPercentageToDP(45),
        fontSize:20
    }
})