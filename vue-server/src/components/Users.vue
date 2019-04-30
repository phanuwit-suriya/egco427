<template>
  <div class="users">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-lg-12">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." v-model="search">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
              Search
            </button>
          </span>
        </div>
      </div>
    </div>

    <table class="table table-striped table-borders">
      <thead>
        <tr>
          <th class="center">First Name</th>
          <th class="center">Last Name</th>
          <th class="center">E-Mail</th>
          <th class="center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in Users" v-bind:key="user._id">
          <td class="text-left">{{ user.firstName }}</td>
          <td class="text-left">{{ user.lastName }}</td>
          <td class="text-left">{{ user.email }}</td>
          <td class="text-left">
            <router-link :to="{ path: 'updateuser/' + user._id}">
              <button class="btn btn-xs btn-warning">
                <span class="glyphicon glyphicon-pencil"></span>
              </button>
            </router-link>
            <button
              class="btn btn-xs btn-danger"
              data-toggle="modal"
              data-target=".bd-example-modal-sm"
              v-on:click="DELETE(user._id)"
            >
              <!-- <span class="glyphicon glyphicon-trash"></span> -->
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <router-link to="/adduser">
      <button class="btn btn-large btn-block btn-success full-width">Add User</button>
    </router-link>

    <div
      class="modal fade bd-example-modal-sm"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Are you sure you want to delete this item?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/users">
              <button type="button" class="btn btn-danger" @click="delUser(uid)">Delete</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      title: "User List Page",
      Users: [],
      uid: "",
      search: ""
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/users/")
      .then(response => {
        this.Users = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    delUser: userId => {
      const url = "http://localhost:3000/users/" + userId;
      axios
        .delete(url)
        .then(repsonse => {
          console.log("Delete User ID: " + userid + "Successfully");
        })
        .catch(error => {
          console.log(error);
        });
      window.location.reload();
    },
    DELETE: id => {
      $("#my-modal").modal("show");
      this.uid = id;
      console.log(this.uid);
      console.log(typeof this.uid);
    }
  },
  computed: {
    filteredUsers: () => {
      return this.Users.filter(user => {
        return user.firstName.match(this.search);
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