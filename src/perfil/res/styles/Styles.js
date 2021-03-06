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
        position:'absolute',
        width:"100%",
        height:"25%"
    },
    image_perfil:{
        position:'absolute',
        width:120,
        height:120,
        borderRadius:60,
        top:100,
        alignSelf:'center',
        elevation:7,
        zIndex:9,
        borderWidth:2,
        borderColor:color.cinza_dark,
        alignItems:'center', 
        justifyContent:'center',
    },
    image_perfil_feedback:{
        position:'absolute',
        width:45,
        height:45,
        borderRadius:60,
        top:'10%',
        alignSelf:'flex-start',
        elevation:7,
        start:'5%',
        zIndex:9,
        borderWidth:2,
        borderColor:color.cinza_dark,
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
    rating_feedback:{
        position:'absolute',
        top:'32%',
        start:'20%',
        backgroundColor:color.cinza_dark
    },
    text_nome_feedback:{
        position:'absolute',
        alignSelf:'flex-start',
        top:'15%',
        start:'20%',
        maxWidth:'82%',
        color:color.white,
        fontSize:20,
        fontWeight:'bold'
    },
    text_desc_feedback:{
        marginTop:'24%',
        marginStart:'20%',
        width:280,
        marginBottom:10,
        color:color.white,
        fontSize:18,
        fontWeight:'normal'
        },
    btn_add_float:{
        position:'absolute',
        width:60, 
        height:60, 
        backgroundColor:color.blur_fundo, 
        alignItems:'center', 
        justifyContent:'center',
        borderRadius:30, 
        right:25,
        bottom:125, 
        elevation:7, 
        zIndex:9
    },
    container_flat:{
        top:380,
        start:10,
        end:10
    },
    container_list:{
        elevation:1.5,
        width:'95%',
        minHeight:150,
        flexDirection:'row',
        flexShrink:1,
        flexWrap:'wrap'

    },
    back_list:{
        borderRadius:25,
        backgroundColor:color.cinza_dark,
        elevation:5,
        zIndex:15,
        borderStartWidth:3,
        borderStartColor:color.blur_fundo,
        borderEndWidth:0.5,
        borderBottomColor:color.black
    },
    icon_wallet:{
        position:'absolute',
        bottom:25,
        start:25
    },
    text_nome:{
        position:'absolute',
        fontSize:25,
        alignSelf:'center',
        maxWidth:'90%',
        top:65,
        marginStart:25,
        color:color.white,
        elevation:7,
        zIndex:8,
        fontWeight:'bold'
    },
    text_local:{
        position:'absolute',
        fontSize:16,
        alignSelf:'center',
        maxWidth:'90%',
        top:100,
        marginStart:25,
        color:color.cinza_light,
        elevation:7,
        zIndex:8,
        fontWeight:'normal'
    },
    text_desc:{
        position:'absolute',
        fontSize:18,
        alignSelf:'center',
        maxWidth:'90%',
        top:130,
        marginStart:25,
        color:color.white,
        elevation:7,
        zIndex:8,
        fontWeight:'normal'
    },
    fundo_feedback:{
        position:'absolute',
        backgroundColor:color.blur_fundo,
        borderRadius:30,
        height:50,
        width:'40%',
        top:220,
        alignSelf:'center',
        alignItems:'center',
        zIndex:7
    },
    icon_feedback:{
        position:'absolute',
        alignSelf:'flex-end',
        marginEnd:'45%',
        top:14
    },
    text_feedback:{
        position:'absolute',
        alignSelf:'center',
        fontSize:25,
        top:10,
        color:color.black,
        fontWeight:'bold'
    },
    icon_compartilhar:{
        position:'absolute',
        top:230,
        end:50,
        zIndex:7
    },
    icon_chat:{
        position:'absolute',
        top:230,
        start:50,
        zIndex:7
    },
    text_feedback_number:{
        position:'absolute',
        alignSelf:'center',
        fontSize:20,
        top:290,
        color:color.white,
        fontWeight:'bold',
        zIndex:7
    },
    label_feedback_number:{
        position:'absolute',
        alignSelf:'center',
        fontSize:14,
        top:320,
        color:color.cinza_light,
        fontWeight:'normal',
        zIndex:7
    },
    text_enviados_number:{
        position:'absolute',
        alignSelf:'flex-start',
        fontSize:20,
        top:290,
        start:48,
        color:color.white,
        fontWeight:'bold',
        zIndex:7
    },
    label_enviados_number:{
        position:'absolute',
        alignSelf:'flex-start',
        fontSize:14,
        top:320,
        start:35,
        color:color.cinza_light,
        fontWeight:'normal',
        zIndex:7
    },
    text_pedidos_number:{
        position:'absolute',
        alignSelf:'flex-start',
        fontSize:20,
        top:290,
        end:48,
        color:color.white,
        fontWeight:'bold',
        zIndex:7
    },
    label_pedidos_number:{
        position:'absolute',
        alignSelf:'flex-start',
        fontSize:14,
        top:320,
        end:35,
        color:color.cinza_light,
        fontWeight:'normal',
        zIndex:7
    },
    icon_config:{
        position:'absolute',
        top:50,
        end:35,
        zIndex:4
    }
})

export {styles}