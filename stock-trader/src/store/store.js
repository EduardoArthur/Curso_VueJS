import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio.js'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
})