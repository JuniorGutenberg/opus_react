import React,{useState } from 'react'
import {View,Image,FlatList,TextInput} from 'react-native'
import { styles } from '../../res/styles/Styles'
import back from '../../../res/assets/maps.jpeg'
import {Ionicons} from '@expo/vector-icons'
import color from '../../../res/values/colors'
import {LinearGradient} from 'expo-linear-gradient'
import strings from '../../../res/values/strings'
import {EnviadosRender} from '../render/EnviadosRender'



const EnviadosView = ()=>{

    const [cnvs] = useState([
        {
          msg:'Olá',
          status:0
        }
      
    ]);

    return <View style={styles.container} >
            <Image source={back} style={styles.image_fundo} blurRadius={2} />
            <LinearGradient colors={['transparent', 'black']} style={styles.image_fundo}/>
            <View style={styles.fundo_search}>
                <Ionicons name="search-outline" size={30} style={styles.icon_search} color={color.black}/>
                <TextInput style={styles.text_input_search}
                        placeholderTextColor="black"
                        placeholder={strings.hint_enviados_search}>
                </TextInput>
            </View>
           
            <View style={styles.fundo_curvada}>
                <FlatList 
                    style={styles.container_flat}
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={cnvs}
                    renderItem={({item})=> <EnviadosRender data={item}/>}
                    />
            </View>
        </View>
}
export {EnviadosView}