<template>
    <v-snackbar
      v-model="feedback.show"
      timeout=2000
      multi-line
      location="top end"
      theme="dark"
      :color="feedback.color"
      variant="flat"
    >
      {{ feedback.text}}
      <template v-slot:actions>
        <v-btn
          color="blue"
          variant="text"
          @click="hideFeedback"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script >
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['feedback'])
  },
  methods: {
    hideFeedback () {
      this.$store.commit('hideFeedback')
    }
  }
}


</script>