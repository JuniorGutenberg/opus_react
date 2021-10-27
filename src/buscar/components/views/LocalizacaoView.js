import React,{useState } from 'react'
import {View,TextInput,Text, TouchableOpacity} from 'react-native'
import { styles } from '../../res/styles/Styles'

import {Ionicons} from '@expo/vector-icons'
import color from '../../../res/values/colors'
import strings from '../../../res/values/strings'

const LocalizacaoView = ({navigation})=>{
    return <View style={styles.container}>
            <TouchableOpacity style={styles.icon_back}
                onPress={()=>{navigation.goBack()}}>
                <Ionicons name={"arrow-back-outline"} size={25} color={color.white}/>
            </TouchableOpacity>
            <Text style={styles.label_local}> {strings.label_local} </Text>  
            <TouchableOpacity style={styles.container_minha_loc}>
                <Ionicons name={"md-locate-outline"} size={25} style={styles.icon_loc} color={color.white}/>
                <Text style={styles.text_usar_loc}>{strings.minha_loc}</Text>
            </TouchableOpacity>
           {/**
             * Rua
             */}
            <Text style={styles.label_manual}> {strings.label_manual} </Text>  
            <Text style={styles.label_rua}> {strings.label_rua} </Text>  
            <View style={styles.fundo_rua}>
                <TextInput style={styles.input_rua} 
                    placeholder={strings.hint_rua}
                    numberOfLines={1}
                    placeholderTextColor="white"
                    > 
                </TextInput>
            </View>
            {/**
             * Bairro
             */}
            <Text style={styles.label_bairro}> {strings.label_bairro} </Text>  
            <View style={styles.fundo_bairro}>
                <TextInput style={styles.input_rua} 
                    placeholder={strings.hint_bairro}
                    numberOfLines={1}
                    placeholderTextColor="white"
                    > 
                </TextInput>
            </View>
             {/**
             * Cidade
             */}
            <Text style={styles.label_cidade}> {strings.label_cidade} </Text>  
            <View style={styles.fundo_cidade}>
                <TextInput style={styles.input_rua} 
                    placeholder={strings.hint_cidade}
                    numberOfLines={1}
                    placeholderTextColor="white"
                    > 
                </TextInput>
            </View>
            {/**
             * Estado
             */}
            <Text style={styles.label_estado}> {strings.label_estado} </Text>  
            <View style={styles.fundo_estado}>
                <TextInput style={styles.input_rua} 
                    placeholder={strings.hint_estado}
                    numberOfLines={1}
                    placeholderTextColor="white"
                    > 
                </TextInput>
            </View>
            <TouchableOpacity style={styles.container_button}>
                <Text style={styles.text_button}> {strings.btn_local}</Text>
            </TouchableOpacity>
    </View>
}
export {LocalizacaoView}