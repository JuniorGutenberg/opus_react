import React from 'react'
import { View,TouchableOpacity,Text} from 'react-native'
import { styles } from '../../res/styles/Styles'
import {Ionicons} from '@expo/vector-icons'; 
import color from '../../../res/values/colors'






const EnviadosRender = ()=>{

    return <View style={styles.container}>
        <TouchableOpacity style={styles.container_list}>
            <View   style={styles.back_list}>
                <Text style={styles.text_title}> Comprar Pão</Text>
                <Text style={styles.text_desc} numberOfLines={3}> Alguém Poderia ir até a padaria comprar 5 pães !!</Text>
                <Text style={styles.text_price} numberOfLines={1}> R$ 5,00</Text>

                <Ionicons 
                    style={styles.icon_wallet}
                    name={'wallet-outline'} size={30} color={color.white}>
                </Ionicons>
            </View>
        </TouchableOpacity>
    </View>
}
export{EnviadosRender}