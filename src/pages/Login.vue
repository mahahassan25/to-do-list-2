<template>
    <v-card class="mx-auto mt-5 pa-6" width="500">
      <v-form ref="form" >
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>      
        <v-text-field
          v-model="password"
          :counter="10"
          :rules="passRules"
          label="Password"
          :type="!showPass?'password':'text'"
          required
          :append-inner-icon="!showPass?'mdi-eye-off':'mdi-eye'"
          @click:append-inner="showPass=!showPass"
        ></v-text-field>
        
        <div class="d-flex flex-column">
          <v-btn
            class="mt-4"
            color="success"
            block
            @click="handleSubmit"
          >
            submit
          </v-btn>
  
        </div>
      </v-form>
    </v-card>
  </template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import feedback from '@/components/feedSnack.vue';
import FeedSnack from '@/components/feedSnack.vue';
const store=useStore()
const router=useRouter()
const showPass=ref(false)
const form =ref(null)
const name=ref(null)
const email=ref(null)
const password=ref(null)

const emailRules=[
v => !!v || 'Email is required',

]

const passRules=[
    v => !!v || 'Password is required',
   
]

const handleSubmit=async()=>{
    const {valid} =await form.value.validate()
    if(valid) {
        console.log(store.state.userData.email)
        console.log(store.state.userData.password)
        if((email.value===store.state.userData.email) && (password.value===store.state.userData.password)){
            localStorage.setItem("user", email.value);
            store.commit('setUser',email.value)
            router.push('/')
        }
       else{
        store.commit('showFeedBack',{text:'wrong password or email',color:'error'})
       }
      
       }
}
</script>