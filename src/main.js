import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBWz9X9z1JYyTlc4lS2AGTqSuSPqjV96QY",
  authDomain: "vcalander-32a6c.firebaseapp.com",
  databaseURL: "https://vcalander-32a6c.firebaseio.com",
  projectId: "vcalander-32a6c",
  storageBucket: "vcalander-32a6c.appspot.com",
  messagingSenderId: "70892137082",
  appId: "1:70892137082:web:edc9ab776b3dd74e3569c3"
});

export const db = firebase.firestore();



new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
