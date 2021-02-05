import axios from 'axios'

export const httpPostmon = axios.create({
    baseURL: 'https://api.postmon.com.br/v1/cep/'
})

export const httpMapbox = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    //Rua%20Sao%20Manoel%20808.json?access_token=pk.eyJ1Ijoiem9lcHJvZ3JhbWFkb3JhIiwiYSI6ImNraW9uMHN4MTBpMTAycnBjZGJlaXhnOGEifQ.xTonjETd85WUKCS0Lv9Sow
})