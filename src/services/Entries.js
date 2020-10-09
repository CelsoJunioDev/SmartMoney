import { Alert } from 'react-native';
import {getRealm} from './Realm';

export const getEntries = async () => { //CONSULTA AO BD
    const realm = await getRealm(); //busca o BD

    const entries = realm.objects('Entry'); // salva os resultados na const entries

    console.log('getEntries :: entries ', JSON.stringify(entries));

    return entries;
}

export const saveEntry = async (value) => {

    const realm = await getRealm(); 
    let data = {}; 

    const {amount} = value;

    try {
        realm.write(() => {
            data = {
                id: 'CBA',
                amount: amount,
                entryAt: new Date(),        
                isInit: false,
               
            };
    
            realm.create('Entry', data, true); //nome do BD, os dados, se for id repetido ele atualiza, se for unico, cria.
        });
    
        console.log('saveEntry :: data: ', JSON.stringify(data));

    }catch(error){
        console.error(
            'saveEntry :: error on save object: ', JSON.stringify(data));
            Alert.alert("Erro ao salvar os dados de lançamento");
    }
      
    return data;

};