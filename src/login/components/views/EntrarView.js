import React from 'react'
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons'; 
import {styles} from '../../res/styles/Styles'

import color from '../../../res/values/colors'
import strings from '../../../res/values/strings'
import icon from '../../../res/assets/icon.png'



const EntrarView = ({navigation}) => {

    return <View style={styles.container_entrar}>

        <TouchableOpacity style={styles.button_back} onPress={() => {navigation.goBack()}}
              >
            <Ionicons name={'arrow-back-outline'} size={25} color={color.blur_fundo} />
        </TouchableOpacity>

        <Text style={ styles.text_email}>{strings.email}</Text>

        <Image source={icon} style={styles.icon_amarelo}/>


        <TextInput style={styles.text_input_email} 
         placeholderTextColor="white"

        placeholder={strings.hint_email}/>
        
        <Text style={ styles.text_password}>{strings.senha}</Text>

        <TextInput style={styles.text_input_password} 
        secureTextEntry={true}
        placeholderTextColor="white"
        placeholder={strings.hint_senha}/>

        <Text style={ styles.text_esqueceu}>{strings.esqueceu_senha}</Text>


        <TouchableOpacity style={styles.button_login_entrar}
            onPress={() => navigation.navigate("Navigation")}

        >
            <Text style={styles.text_button_login}> {strings.entrar} </Text>
        </TouchableOpacity>
        

    </View>
};

export{EntrarView};