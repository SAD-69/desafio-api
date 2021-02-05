import { httpMapbox } from './api'

export default {
    findCoordsByAddress: (address) => {
        return httpMapbox.get(`${address}.json?access_token=pk.eyJ1Ijoiem9lcHJvZ3JhbWFkb3JhIiwiYSI6ImNraW9uMHN4MTBpMTAycnBjZGJlaXhnOGEifQ.xTonjETd85WUKCS0Lv9Sow`)
    }
}