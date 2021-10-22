import React,{useState } from 'react'
import {View,Image,TouchableOpacity,Text,FlatList} from 'react-native'
import { styles } from '../../res/styles/Styles'
import back from '../../../res/assets/maps.jpeg'
import {Ionicons} from '@expo/vector-icons'; 
import color from '../../../res/values/colors'
import {LinearGradient} from 'expo-linear-gradient'
import {BuscarRender} from '../render/BuscarRender'





const BuscarView = ({navigation}) => {

    const [cnvs] = useState([
        {
          msg:'Olá',
          status:0
        }
      
    ]);
    

    return <View style={styles.container} >
            <Image source={back} style={styles.image_fundo} blurRadius={2} />
            <LinearGradient colors={['transparent', 'black']} style={styles.image_fundo}/>

            <TouchableOpacity>
                <Ionicons name="location-outline" size={25} style={styles.icon_localizacao_distancia} color={color.white}/>
                <Text  style={styles.text_localizacao_distancia} > 100 km  </Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_add_float}
                >
            <Ionicons name={'add-outline'} size={35} color={color.black} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.fundo_localizacao}>
                <Ionicons name="location-outline" size={25} style={styles.icon_localizacao}/>
                <Text style={styles.text_localizacao} numberOfLines={1}>
                    Av. Franz João Hassis, 502 
                </Text>
            </TouchableOpacity>
            <View style={styles.fundo_curvada}>
        
                <FlatList 
                    style={styles.container_flat}
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={cnvs}
                    renderItem={({item})=> <BuscarRender data={item}/>}
                    />
            </View>
    </View>
}

export{BuscarView}