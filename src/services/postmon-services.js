import { httpPostmon } from './api'

export default {
    findByCep: (zipCode) => {
        return httpPostmon.get(zipCode, { data: zipCode })
    }
}