<template>
  <div class="adduser">
    <h1>{{ title }}</h1>
    <div class="vframe">
      <form action>
        <div class="form-group">
          <label class="float-left">First Name:</label>
          <input type="text" class="form-control" v-model="user.firstName" placeholder="First Name">
        </div>
        <div class="form-group">
          <label class="float-left">Last Name:</label>
          <input type="text" class="form-control" v-model="user.lastName" placeholder="Last Name">
        </div>
        <div class="form-group">
          <label class="float-left">E-Mail:</label>
          <input type="email" class="form-control" v-model="user.email" placeholder="user@email.com">
        </div>
        <button type="submit" class="btn btn-large btn-block btn-primary full-width" v-on:click="addToAPI">Submit</button>
        <button type="submit" class="btn btn-large btn-block btn-success full-width">Go to User Page</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "AddUser",
  data() {
    return {
      title: "Add User",
      user: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  },
  methods: {
    addToAPI(){
      var newUser = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email
      };
      console.log(newUser);
      axios.post('http://localhost:3000/users', newUser)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
};
</script>

