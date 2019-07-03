<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Meetup Demo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat to="/">Home</v-btn>
            <v-btn flat to="/users">Users</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card>
          <v-card-title>
            <div style="width: 100%">
              <router-view/>
            </div>
          </v-card-title>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
