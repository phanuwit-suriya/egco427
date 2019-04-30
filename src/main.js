// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBnK-_9EpH-VNpgL2QLLuJcX0uiEO7Ss84",
  authDomain: "egco427auth-c1fac.firebaseapp.com",
  databaseURL: "https://egco427auth-c1fac.firebaseio.com",
  projectId: "egco427auth-c1fac",
  storageBucket: "egco427auth-c1fac.appspot.com",
  messagingSenderId: "366316917225"
};
firebase.initializeApp(config);

window.firebase = firebase;

/* eslint-disable no-new */
firebase
  .auth()
  .onAuthStateChanged(user => {
    if (!app) {
      app = new Vue({
        el: '#app',
        router,
        components: {
          App
        },
        template: '<App/>'
      })
    }
  });
