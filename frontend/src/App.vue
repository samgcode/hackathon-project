<template>
  <div id="app">
    <nav class="navbar navbar-fixed navbar-expand-lg navbar-light bg-primary">
          <img src="https://cdn.discordapp.com/attachments/716072757766520854/716690722862006292/logo.png" width="40" height="40"  alt="">
          <router-link class="navbar-brand text-white home-link" :to="{ name: 'Home' }">Home</router-link>
          <div>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link text-white" :to="{ name: 'Tweets' }">recent supply tweets<span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'Graphs' }">graphs</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'Store' }">store</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'Login' }">login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'Volunteer' }">volunteer</router-link>
              </li>
            </ul>
          </div>
        </nav>
    <router-view/>
  </div>
</template>

<style>
.home-link {
  padding-left: 10px;
}
</style>
