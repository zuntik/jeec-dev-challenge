<template>
    <div class="navbar">
        <router-link router-link :to="{ name: 'Speakers' }">
          <img class="navbar-left-logo" :src="navbar_logo_link">

          <img class="navbar-left-logo-mobile" :src="navbar_mobile_logo_link">
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      show_menu: false,
      navbar_logo_link: "../../static/jeec_logo_small.svg",
      navbar_mobile_logo_link: "../../static/jeec_logo_mobile.svg"
    }
  }
}
</script>

<style>
.navbar {
  width: 100%;
  height: 80px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.16);
  position: fixed;
  z-index: 1000;
  background-color: #ffffff;
}

.navbar-left-logo {
  width: 140px;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
}

.navbar-left-logo-mobile {
  display: none;
}

/* On screens that are <1050px wide*/
@media only screen and (max-width: 1050px) {
  .navbar {
    height: 70px;
  }

  .navbar-left-logo {
    display: none;
  }

  .navbar-left-logo-mobile {
    display: block;
    width: 50px;
    margin-left: 20px;
    margin-top: 10px;
    float: left;
  }
}
</style>
