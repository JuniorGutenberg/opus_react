import React,{useState } from 'react'
import {View,TextInput,Text, TouchableOpacity,Dimensions} from 'react-native'
import { styles } from '../../res/styles/Styles'
import Slider from '@react-native-community/slider'


import {Ionicons} from '@expo/vector-icons'
import color from '../../../res/values/colors'
import strings from '../../../res/values/strings'

const FilterLocalView = ({navigation}) => {
    const [distancia,setDistancia] = useState(1);
    const left = distancia * (Dimensions.get('window').width - 60)/100-15;


    return <View style={styles.container}>
        <TouchableOpacity style={styles.icon_back}
                onPress={()=>{navigation.goBack()}}>
                <Ionicons name={"arrow-back-outline"} size={25} color={color.white}/>
        </TouchableOpacity>
        <Text style={styles.label_local}> {strings.label_filtro} </Text>  
        <Text style={{ 
            position:'absolute',
            top:150,
            start:left,
            fontSize:19,
            marginStart:40,
            color:color.white,
            marginTop:25}}> {Math.floor(distancia)}
        </Text>  
        <Slider style={styles.slider}  minimumValue={1} maximumValue={100} value={distancia}
            onValueChange={(valor) => setRadius(setDistancia,valor)}
        ></Slider>
        <Text style={styles.label_min_slider}>1 km</Text>
        <Text style={styles.label_max_slider}>100 km</Text>
        <TouchableOpacity style={styles.container_button}>
            <Text style={styles.text_button}> {strings.btn_radius}</Text>
        </TouchableOpacity>


    </View>
}

function setRadius (setDistancia,valor){
    setDistancia(valor);
  }

export{FilterLocalView}