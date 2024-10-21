<template>
    <v-card class="mx-auto mt-5 pa-6" width="500">
      <v-form ref="form" >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        
        <v-text-field
          v-model="phone"
          :counter="11"
          :rules="phoneRules"
          label="Phone"
          type="number"
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

        <v-text-field
          v-model="confirmPassword"
          :counter="10"
          :rules="conPassRules"
          label="confirm Password"
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
const store=useStore()
const router=useRouter()
const showPass=ref(false)
 const form =ref(null)
 const name=ref(null)
 const phone=ref(null)
 const email=ref(null)
 const password=ref(null)
 const confirmPassword=ref(null)
 const  nameRules=[
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be 10 characters or less',
    ]
const phoneRules=[
    v => !!v || 'Phone is required',
    v => (v.length === 11) || 'phone Must Be 11 digits' 
]
const emailPattern = ref(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const emailRules=[
v => !!v || 'Email is required',
v => (emailPattern.value.test(v) ) || 'WRONG EMAIL'
]
const passregex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
const passRules=[
    v => !!v || 'Password is required',
    v => (passregex.test(v)) || 'password must contain Upperletters,speacial Characters and numbers'
]

const conPassRules=[
    v => (v === password.value) || 'Not Match'
]
const handleSubmit=async()=>{
    const {valid} =await form.value.validate()
    if(valid) {
        store.commit('showFeedBack',{text:'register successfully ',color:'success'})
        localStorage.setItem("user", name.value);
        store.commit('setUser',name.value)
        store.commit('setUserData',{email:email.value,password:password.value})
        console.log(store.state.userData.email)
        router.push('/')}
}
</script>