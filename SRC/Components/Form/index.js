import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";
export default function Form(){

       const[height,setHeight]=useState(null)
       const[weight,setWeight]=useState(null)
       const[messageImc,setMessageImc]=useState("Preencha seu peso:")
       const[imc,setImc]=useState(null)
       const[textButton,setTextButton]=useState("Calcular IMC:")
       
function imcCalcular(){
  return setImc((Weight/(height*height)).toFixed(2))
}


function validationImc(){
  if(weight != null && height != null){
      imcCalcular()
      setHeight(null)
      setWeight(null)
      setMessage(" seu IMC é = ")
      setTextButton("Calcular Novamente")
      return
  }
  setImc(null)
  setTextButton("Preencha o peso e altura")
}

    return(
        <View>
          
          <View>
            <Text>Altura</Text>
            <TextInput
             onChange={setHeight}
             value = {height}
             placeholder="Ex.1.75"
             keyboardType="numeric"
            />

            <Text>Peso</Text>
            <TextInput
            onChange={setWeight}
            value = {weight}
             placeholder="Ex. 85.766"
             keyboardType="numeric"
            />

            <Button 
            onPress={() => validationImc()}
            title={textButton}
            />

          </View>
            <ResultImc
            messageResultImc = {messageImc}
            ResultImc = {imc}
            />
        </View>
    );
}