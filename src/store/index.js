
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: null,
      userData:{
        email:null,
        password:null
      },
      feedback:{
        text:'',
        show:false,
        color:''
      }
    }
  },
  mutations: {
    setUser (state,payload) {
      state.user=payload
    },
    setUserData(state,payload){
        state.userData.email=payload.email,
        state.userData.password=payload.password
    },
    showFeedBack(state,payload){
        state.feedback.show=true
        state.feedback.text=payload.text
        state.feedback.color=payload.color
    },
    hideFeedback(state,payload){
        state.feedback.show=false
        state.feedback.text=payload.text
        state.feedback.color=payload.color
    }
  }
})

export default store