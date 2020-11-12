import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialogue.vue'

import Form from './components/form/TheForm.vue'
import TheResources from './components/learning-resources/TheResources';

const router = createRouter({
      history: createWebHashHistory(),
      routes: [
            { path: '/form', component: Form },
            { path: '/the-resources', component: TheResources }                     
      ]
})

const app = createApp(App)

      app.component('base-card', BaseCard);
      app.component('base-button', BaseButton);
      app.component('base-dialog', BaseDialog);
      
      app.use(router);

      app.mount('#app');
