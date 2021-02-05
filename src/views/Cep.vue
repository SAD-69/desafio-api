<template>
  <div class="cep">

    <h2>Encontrar endereço</h2>

    <v-form @submit.prevent="findByCep" ref="form">
        <v-text-field v-model="zipCode" :counter="8" label="Enter your desired zip code" required></v-text-field>
    </v-form>

    <v-card v-show="address.cep">
        <div id="mapContainer" class="basemap"></div>
        <v-card-title>{{ address.logradouro }}</v-card-title>
        <v-card-subtitle class="text-left">{{ address.cep }}</v-card-subtitle>
        <v-card-text class="text-left">
            {{ address.bairro }}, {{ address.cidade }} - {{ address.estado }}
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Mapboxgl from "mapbox-gl";
import PostmonServices from '../services/postmon-services'
import MapboxServices from '../services/mapbox-services'

export default {
  data() {
      return {
          accessToken: 'pk.eyJ1Ijoiem9lcHJvZ3JhbWFkb3JhIiwiYSI6ImNraW9uMHN4MTBpMTAycnBjZGJlaXhnOGEifQ.xTonjETd85WUKCS0Lv9Sow',
          center: '',
          zipCode: '',
          address: {
            bairro: '',
            complemento: '',
            cidade: '',
            logradouro: '',
            estado_info: {
                area_km2: '',
                codigo_ibge: '',
                nome: ''
            },
            cep: '',
            cidade_info: {
                area_km2: '',
                codigo_ibge: ''
            },
            estado: ''
          },
          addresses: []
      }
  },
  name: 'Cep',
  methods: {
      findByCep() {
          PostmonServices.findByCep(this.zipCode).then(response => {
            this.address = response.data

            MapboxServices.findCoordsByAddress(this.address.logradouro + " " + this.address.cidade + " " + this.address.bairro).then(response => {

              this.center = response.data.features[0].center

              new Mapboxgl.Map({
                container: "mapContainer",
                style: "mapbox://styles/mapbox/streets-v11",
                center: this.center,
                zoom: 16,
                accessToken: this.accessToken
              })
            })
          })
      }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cep {
    margin: 0 20% 5% 20%;
}
.cep > * {
    margin-top: 2%;
    margin-bottom: 2%;
}
.basemap {
  width: 100%;
  height: 30vh;
}
</style>
