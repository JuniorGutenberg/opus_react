import React,{useState } from 'react'
import {View,TextInput,Text, TouchableOpacity,Dimensions} from 'react-native'
import { styles } from '../../res/styles/Styles'
import CurrencyPicker from "react-native-currency-picker"
import CurrencyInput from 'react-native-currency-input'

import {Ionicons} from '@expo/vector-icons'
import color from '../../../res/values/colors'
import strings from '../../../res/values/strings'
import { ScrollView } from 'react-native-gesture-handler'



const AddCardView = ({navigation}) => {

    let currencyPickerRef = undefined
    const [valueCurrency, setValueCurrency] = useState(0)
    const [valorFormatado, setValorFormatado] = useState("")

    return <ScrollView 
            style={styles.container_scroll_add}>
               
                <TouchableOpacity style={styles.icon_back}
                        onPress={()=>{navigation.goBack()}}>
                        <Ionicons name={"arrow-back-outline"} size={25} color={color.white}/>
                </TouchableOpacity>
                <Text style={styles.label_local}> {strings.label_add_card} </Text>  
                {/**
                 * Titulo
                 */}
                <Text style={styles.label_titulo_card}> {strings.label_titulo} </Text>  
                <View style={styles.container_titulo_card}>
                    <TextInput style={styles.input_titulo_card} 
                        placeholder={strings.hint_titulo_card}
                        placeholderTextColor="white"
                        >
                    </TextInput>
                </View>
                {/**
                 * Descrição
                 */}
                <Text style={styles.label_desc_card}> {strings.label_desc} </Text>  
                <View style={styles.container_desc_card}>
                    <TextInput style={styles.input_desc_card} 
                        placeholder={strings.hint_desc_card}
                        numberOfLines={4}
                        multiline={true}
                        placeholderTextColor="white"
                        >
                    </TextInput>
                </View>
                {/**
                 * Escolher Moeda
                 */}
                <Text style={styles.label_moeda_card}> {strings.label_moeda} </Text>  
                <View style={styles.container_moeda_card}>
                <CurrencyPicker
                            style={{marginStart:25}}
                            currencyPickerRef={(ref) => {currencyPickerRef = ref}}
                            enable={true}
                            darkMode={true}
                            currencyCode={"BRL"}
                            showFlag={true}
                            showCurrencyName={true}
                            showCurrencyCode={true}
                            onSelectCurrency={(data) => { 
                                console.log("Open")
                            }}
                            onOpen={() => {console.log("Open")}}
                            onClose={() => {console.log("Close")}}
                            showNativeSymbol={true}
                            showSymbol={false}
                            containerStyle={{
                                container: {marginStart:15},
                                flagWidth: 25,
                                currencyCodeStyle: {color:color.white},
                                currencyNameStyle: {color:color.white},
                                symbolStyle: {color:color.white},
                                symbolNativeStyle: {color:color.white}
                            }}
                            modalStyle={{
                                container: {},
                                searchStyle: {},
                                tileStyle: {},
                                itemStyle: {
                                itemContainer: {},
                                flagWidth: 25,
                                currencyCodeStyle: {},
                                currencyNameStyle: {},
                                symbolStyle: {},
                                symbolNativeStyle: {}
                                }
                            }}
                            title={"Currency"}
                            searchPlaceholder={"Search"}
                            showCloseButton={true}
                            showModalTitle={true}
                        />
                </View>
                {/**
                 * Valor
                 */}
                <Text style={styles.label_valor_card}> {strings.label_valor} </Text>  
                <View style={styles.container_valor_card}>
                    <CurrencyInput
                        style={styles.input_valor_card} 
                        value={valueCurrency}
                        onChangeValue={setValueCurrency}
                        onChangeText={(value)=>{setValorFormatado(value)}}
                        prefix={"R$ "}
                        delimiter={"."}
                        separator={","}
                        precision={2}
                        placeholder={"R$ 50,00"} 
                        placeholderTextColor="white"
                        maxValue={1000000000}
                        >
                    </CurrencyInput>
                </View>
                <Text style={styles.label_resultado_card}>{valorFormatado} </Text>

                <TouchableOpacity style={styles.container_button_add}>
                        <Text style={styles.text_button}> {strings.btn_add}</Text>
                </TouchableOpacity>
            </ScrollView>
}

export{AddCardView}