import React,{useState } from 'react'
import {View,TextInput,Text, TouchableOpacity,Dimensions} from 'react-native'
import { styles } from '../../res/styles/Styles'
import Slider from '@react-native-community/slider'


import {Ionicons} from '@expo/vector-icons'
import color from '../../../res/values/colors'
import strings from '../../../res/values/strings'

const AddCardView = ({navigation}) => {


    return <View style={styles.container}>
        <TouchableOpacity style={styles.icon_back}
                onPress={()=>{navigation.goBack()}}>
                <Ionicons name={"arrow-back-outline"} size={25} color={color.white}/>
        </TouchableOpacity>


    </View>
}


export{AddCardView}