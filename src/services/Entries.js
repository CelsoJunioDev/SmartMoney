import { Alert } from 'react-native';
import {getRealm} from './Realm';
import {getUUID} from '../services/UUID';


export const getEntries = async () => { //CONSULTA AO BD
    const realm = await getRealm(); //busca o BD

    const entries = realm.objects('Entry'); // salva os resultados na const entries

    console.log('getEntries :: entries ', JSON.stringify(entries));

    return entries;
}

export const saveEntry = async (value, entry = {}) => {

    const realm = await getRealm(); 
    let data = {}; 

    try {
        realm.write(() => {
            data = {
                id: value.id || entry.id || getUUID(),
                amount: value.amount || entry.amount,
                entryAt: value.entryAt || entry.entryAt,        
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

export const deleteEntry = async entry => {
    const realm = await getRealm(); 

    try {
        realm.write(() => {
            realm.delete(entry);
        });
    } catch (error) {
        console.error(
            'deleteEntry :: error on delete object: ', JSON.stringify(entry));
            Alert.alert("Erro ao salvar excluir este lançamento");
    }
}