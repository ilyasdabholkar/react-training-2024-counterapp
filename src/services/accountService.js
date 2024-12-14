import config from "../config.json";
import axios from "axios";

export function getAccounts(){
    return axios.get(config.apiEndpoint+"accounts");
}

export function getAccountById(id){
    return axios.get(config.apiEndpoint+"accounts/"+id);
}

export function saveAccount(data){
    return axios.post(config.apiEndpoint+"accounts",data);
}