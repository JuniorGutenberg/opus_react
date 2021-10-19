import React from 'react'
import {View,Image,TouchableOpacity,Text} from 'react-native';
import {styles} from '../../res/styles/Styles'
import strings from '../../../res/values/strings'
import back from '../../../res/assets/maps.jpeg'
import icon from '../../../res/assets/icon.png'


const LoginView = ({navigation})=>{
    return <View style={styles.container}>

        <Image source={back} style={styles.image_login} blurRadius={7}/>

        <View style={styles.background_login}/>

        <Image source={icon} style={styles.icon}/>
        
        <Text style={styles.text_app}> 
            <Text>
                {strings.app_name+" "}
            </Text> 
            <Text style={styles.text_lite}>
                {strings.lite}
            </Text>
         </Text>

        <TouchableOpacity style={styles.button_login}
            onPress={() => navigation.navigate("Entrar")}

        >
            <Text style={styles.text_button_login}> {strings.entrar} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button_cadastro}
            onPress={() => navigation.navigate("Cadastro")}

        >
            <Text style={styles.text_button_cadastro}> {strings.cadastrar} </Text>
        </TouchableOpacity>
    </View>;
}
export {LoginView}