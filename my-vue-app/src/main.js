import App from './App.vue'
import { createApp } from 'vue'
import Shared from '@shared/src/main'

createApp(App)
  .use(Shared)
  .mount('#app')
