<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/kosman/user/signup">Sign up</router-link>
  </div>
  <router-view/>
</template>

<style>
#nav a.router-link-exact-active {
  color: #6C609E;
}
</style>
