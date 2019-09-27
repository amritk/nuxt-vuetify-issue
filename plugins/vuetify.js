import Vue from 'vue'
import Vuetify from 'vuetify' // <= I don't know why typescript shows type error when using 'vuetify/lib'
// import LRU from 'lru-cache'

Vue.use(Vuetify)

// const themeCache = new LRU({ max: 10, maxAge: 1000 * 60 * 60 })

export default ctx => {
    const vuetify = new Vuetify()
    ctx.app.vuetify = vuetify
    ctx.$vuetify = vuetify.framework
}