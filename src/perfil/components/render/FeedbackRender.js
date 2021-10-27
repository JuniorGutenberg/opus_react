import React from 'react'
import { View,TouchableOpacity,Text,Image} from 'react-native'
import { styles } from '../../res/styles/Styles'
import {Ionicons} from '@expo/vector-icons'
import color from '../../../res/values/colors'
import { Rating} from 'react-native-ratings'
import face from '../../../res/assets/face.jpeg'


const FeedbackRender = ()=>{
    return <TouchableOpacity style={styles.container_list}>
                <View   style={styles.back_list}>
                    <Image source={face} style={styles.image_perfil_feedback}  />
                    <Text style={styles.text_nome_feedback}>Elano Nunes</Text>
                    <Rating 
                        fractions="{1}"     
                        imageSize={20}
                        type='custom'
                        readonly={true}
                        ratingCount={5}
                        startingValue={4}
                        ratingBackgroundColor={color.white}
                        tintColor={color.cinza_dark}
                        style={styles.rating_feedback}
                        >
                    </Rating>
                    <Text style={styles.text_desc_feedback}>
                        Muito bom o atendimento, porém vi que poderia ter um cuidado melhor ao tratar na comunicação e mais algumas coisas tbm</Text>

                </View>
            </TouchableOpacity>
        
}
export {FeedbackRender}