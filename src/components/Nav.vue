<template>
    <v-card color="grey-lighten-4" elevation="0" rounded="0" flat>
        <v-toolbar density="comfortable">
            <v-toolbar-title>
                <RouterLink to="/" class="text-decoration-none text-black"> {{ $t('Home') }}</RouterLink>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="!store.state.user">
                <RouterLink to="/register" class="text-decoration-none text-black">Register</RouterLink>
            </v-btn>
            <v-btn v-if="!store.state.user">
                <RouterLink to="/login" class="text-decoration-none text-black">SIGN IN</RouterLink>
            </v-btn>
            <v-btn @click="logout" v-if="store.state.user">
                {{ $t('SIGNOUT') }}
            </v-btn>
              <div>
                <v-select class="d-flex justify-center" 
                :items="items" variant="outlined" 
                color="primary" density="compact" 
                item-value="value"
                item-title="title"
                v-model="lang"
                @update:model-value="changeLang(lang)"
                ></v-select>
            </div>
        </v-toolbar>
    </v-card>
</template>

<script setup>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import i18n from '../main'
const store=useStore()
const user=ref(null)
const items=ref([{title:'EN', value:'en'},{title:'AR', value:'ar'}])
const lang=ref(null)
const changeLang=(lang)=>{
   i18n.global.locale = lang
  document.cookie=`locale=${lang}`
}
const logout=()=>{
    user.value= localStorage.getItem("user");
    console.log(user.value)
    if(user.value) {
        localStorage.removeItem("user");
        store.commit('setUser',null)
        console.log(user.value)
    } 
}
onMounted(()=>{
    store.state.user=localStorage.getItem("user")
    lang.value=document.cookie.split("=")[1]
})
</script>