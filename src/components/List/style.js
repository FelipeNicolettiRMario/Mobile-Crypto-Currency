import {StyleSheet} from 'react-native';
import {widthPercentageToDP,heightPercentageToDP} from 'react-native-responsive-screen'

export default StyleSheet.create({
    container:{
        width:widthPercentageToDP(80),
        backgroundColor:"white",
        marginLeft:widthPercentageToDP(10),
        borderRadius:10,
        marginTop:heightPercentageToDP(5),
        paddingBottom:widthPercentageToDP(5)
    },
    item:{
        padding:widthPercentageToDP(3),
        backgroundColor:"#8585ad",
        width:widthPercentageToDP(70),
        marginTop:widthPercentageToDP(5),
        marginLeft:widthPercentageToDP(5),
        borderRadius:5,
        
    }
})