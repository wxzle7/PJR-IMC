import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){
    return(
        <View>
          
          <View>
            <Text>Altura</Text>
            <TextInput
             placeholder="Ex.1.75"
             keyboardType="numeric"
            />

            <Text>Peso</Text>
            <TextInput
             placeholder="Ex. 85.766"
             keyboardType="numeric"
            />

          </View>

        </View>
    );
}