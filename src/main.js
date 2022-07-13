import { createApp } from 'vue'
import App from './App.vue'

//Lit library
import 'ds-brk-test-distlit1/baraka.js'
//Vue library (named Plugin for testing, cause it is in fact generated as a vue plugin)
import Plugin from 'ds-brk-test-baraka-vue-rollup'


/* CSS Variables */
import "test-tokens-npm-2/mes_tokens/css/options-variables.css";
import "test-tokens-npm-2/mes_tokens/css/decisions-jel-variables.css";

const app = createApp(App)

app.use(Plugin)
app.mount('#app')
