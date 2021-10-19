import React from 'react'
import {View,Image,TouchableOpacity,Text} from 'react-native'
import { styles } from '../../res/styles/Styles'
import back from '../../../res/assets/maps.jpeg'
import {Ionicons} from '@expo/vector-icons'; 
import color from '../../../res/values/colors'




const BuscarView = ({navigation}) => {

    return <View style={styles.container} >
            <Image source={back} style={styles.image_fundo} blurRadius={2} />

            <TouchableOpacity style={styles.fundo_localizacao}>
                <Ionicons name="location-outline" size={25} style={styles.icon_localizacao}/>
                <Text style={styles.text_localizacao} numberOfLines={1}>
                    Av. Franz João Hassis, 502 
                </Text>
            </TouchableOpacity>
            <View style={styles.fundo_curvada}>
            <TouchableOpacity style={styles.button_add}>
                <Ionicons name="add-outline" size={25} color={color.black}/>
            </TouchableOpacity>
            </View>
    </View>
}

export{BuscarView}