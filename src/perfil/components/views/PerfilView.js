import React,{useState } from 'react'
import {View,Image,FlatList,Text, TouchableOpacity} from 'react-native'
import { styles } from '../../res/styles/Styles'
import back from '../../../res/assets/maps.jpeg'
import face from '../../../res/assets/face.jpeg'

import {Ionicons} from '@expo/vector-icons'
import color from '../../../res/values/colors'
import {LinearGradient} from 'expo-linear-gradient'
import {FeedbackRender} from '../render/FeedbackRender'



const PerfilView = ()=>{

    const [cnvs] = useState([
        {
          msg:'Olá',
          status:0
        }
      
    ]);


    return <View style={styles.container} >
            <Image source={back} style={styles.image_fundo} blurRadius={2} />
            <Image source={face} style={styles.image_perfil}  />

            <LinearGradient colors={['transparent', 'black']} style={styles.image_fundo}/>

           
            <TouchableOpacity>
                <Ionicons name="settings-outline" size={30} style={styles.icon_config} color={color.white}/>
            </TouchableOpacity>


            <View style={styles.fundo_curvada}>
                <Text style={styles.text_nome}> Junior Gutenberg </Text>
                <Text style={styles.text_local}> Rio de Janeiro, RJ </Text>
                <Text style={styles.text_desc} numberOfLines={3}>Desenvolvedor Mobile, disposto a ganhar dinheiro com trabalhos em gerais </Text>

                <TouchableOpacity style={styles.fundo_feedback}>
                    <Ionicons name="star" size={20} style={styles.icon_feedback} color={color.black}/>
                    <Text style={styles.text_feedback}> 5.0 </Text>

                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="share-social-outline" size={25} style={styles.icon_compartilhar} color={color.blur_fundo}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="chatbox-outline" size={25} style={styles.icon_chat} color={color.blur_fundo}/>
                </TouchableOpacity>

                <Text style={styles.text_feedback_number}> 50 </Text>
                <Text style={styles.label_feedback_number}> Feedbacks </Text>

                <Text style={styles.text_enviados_number}> 10 </Text>
                <Text style={styles.label_enviados_number}> Enviados </Text>

                <Text style={styles.text_pedidos_number}> 30 </Text>
                <Text style={styles.label_pedidos_number}> Pedidos </Text>

                <FlatList
                    style={styles.container_flat}
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={cnvs}
                    renderItem={({item})=> <FeedbackRender data={item}/>}
                />
            </View>
        </View>
}
export {PerfilView}