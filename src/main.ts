
// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import { globalState } from './store/globalState'

const app = createApp(App)
app.provide('globalState',globalState)

registerPlugins(app)

app.mount('#app')
