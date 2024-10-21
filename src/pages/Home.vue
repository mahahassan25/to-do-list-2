<script setup>
import { ref } from 'vue';
import useFirebase from '../composable/firebase';
import store from '@/store';
const {get,post,update,del} = useFirebase()
const todos =get("todos")

const taskModel=ref(null)
const addTask=async()=>{
  await post("todos",{content:taskModel.value,done:false})
  taskModel.value=''
}
const makeTaskDone=async(id,done)=>{
  await update("todos",id,{done: !done})
}

const deleteTask=async(id)=>{
  await del("todos",id)}

const addToFav=async(id,fav)=>{
  await update("todos",id,{fav:!fav})
}

</script>

<template>
 <v-app>
 
   <v-container v-if="store.state.user">
     <v-row class="d-flex  align-center justify-center">
      <v-col cols="8" md="5"><v-text-field v-model="taskModel" :label="$t('addnewtask')"></v-text-field></v-col>
      <v-col cols="2" ><v-btn :disabled="!taskModel" color="primary" block="" @click="addTask">{{ $t('add') }}</v-btn></v-col>
     </v-row>
     <div class="d-flex flex-column justify-center align-center ga-3">
       <v-card v-for="item in todos" :key="item" width="400" >
         <v-card-text>
         <div class="d-flex">
           <span  :class="item.done?'text-decoration-line-through ':'text-decoration-none '">{{item.content}}</span>
          <v-spacer></v-spacer>
          <v-btn  :icon="!item.fav?'mdi-heart-outline':'mdi-heart'" variant="text" color="error" @click="addToFav(item.id,item.fav)"></v-btn>
         </div>
         </v-card-text>
         <v-card-actions>
           <v-btn color="primary" @click=makeTaskDone(item.id,item.done)>{{ $t('DONE') }}</v-btn>
           <v-btn color="error" @click="deleteTask(item.id)">{{ $t('REMOVE') }}</v-btn>
         </v-card-actions>
       </v-card>
     </div>
   </v-container>
   <h1 v-else class="text-center mt-5">WELCOME TO OUR APPLICATION</h1>
 </v-app>
</template>