<template>
  <div id="app" style="width:100%;">
    <v-app id="inspire">
      <v-tabs centered>
        <v-tab>Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
        <v-tab>Tab 3</v-tab>
        <v-tab>Tab 4</v-tab>
        <logo></logo>
        <icon-link></icon-link>
      </v-tabs>
    </v-app>
  </div>
</template>

<script>
import "vuetify/dist/vuetify.css";

export default {
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #526488;
  letter-spacing: 1px;
  font-size: 6em;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
