<template>
  <div class="row">
    <h2>Sign In</h2>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
      <input type="email" v-model="formData.email" class="form-control" placeholder="email">
      <br>
      <input
        type="password"
        v-model="formData.password"
        class="form-control"
        placeholder="password"
      >
      <br>
      <button class="btn btn-success btn-block full-width" @click="signIn">Sign In</button>
      <button class="btn btn-danger btn-block full-width" @click="signInGoogle">Google</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      formData: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.formData.email, this.formData.password)
        .then(user => {
          this.$router.replace("movie");
        })
        .catch(error => {
          alert(error.message);
        });
    },
    signInGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      // firebase.auth().signInWithRedirect(provider).then((result) =>  {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // console.log(user)
          this.$router.replace("/movie");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
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
</style>
