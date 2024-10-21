<script setup>
import { onMounted } from 'vue';
import FeedSnack from './components/feedSnack.vue';
import Nav from './components/Nav.vue';
import { RouterView } from 'vue-router';
import store from './store';

onMounted(()=>{
  // localStorage.getItem('locale')===null?localStorage.setItem('locale','en'):''
  document.cookie.split("=")[0]===null?document.cookie="locale=en":''
})
</script>

<template>
 <v-app>
   <Nav></Nav>
   <FeedSnack/>
   <RouterView />

 </v-app>
</template>

