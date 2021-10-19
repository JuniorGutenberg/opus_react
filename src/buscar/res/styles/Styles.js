import {StyleSheet} from 'react-native';
import color from '../../../res/values/colors'

const styles = StyleSheet.create({
    /**
         * Login Main
         */
    container:{
        flex:   1,
        backgroundColor:color.cinza
    },
    image_fundo:{
        width:"100%",
        height:"25%"
    },
    fundo_curvada:{
        position:'absolute',
        width:"100%",
        height:"100%",
        top:160,
        borderRadius:30,
        zIndex:5,
        backgroundColor:color.cinza
    },
    fundo_localizacao:{
        position:'absolute',
        backgroundColor:color.blur_fundo,
        borderRadius:20,
        height:50,
        width:'90%',
        top:60,
        alignSelf:'center',
        alignItems:'center',
        zIndex:5
    },
    icon_localizacao:{
        alignSelf:'flex-start',
        top:10,
        marginLeft:15
    },
    text_localizacao:{
        fontSize:16,
        alignSelf:'center',
        textAlign:'center',
        maxWidth:'82%',
        alignContent:'center',
        bottom:12,
        marginStart:25
    },
    button_add:{
        position:'absolute',
        width:60,
        height:60, 
        backgroundColor:color.blur_fundo, 
        alignItems:'center', 
        justifyContent:'center',
        borderRadius:30, 
        right:25,
        bottom:25, 
        elevation:7, 
        zIndex:9
    }
})

export {styles}