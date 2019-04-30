<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src="../../assets/icon.png" width="30" height="30" class="d-inline-block align-top" alt=""></a>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="/#/">Home</a>
        <a class="nav-item nav-link" href="/#/Users">Users</a>
        <a class="nav-item nav-link" href="/#/Contact">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'Users',
          page: '/users'
        },
        {
          id: 2,
          text: "Contact",
          page: "/contact"
        }
      ]
    };
  }
};
</script>
