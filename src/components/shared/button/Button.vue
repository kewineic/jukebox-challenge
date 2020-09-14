<template>
  <v-btn 
    large
    class="ma-2 " 
    outlined 
    color="primary"
    :type="buttonType"
  >
    {{ buttonValue }}
  </v-btn>

</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: false
    },
    buttonValue: {
      type: String,
      required: true
    }
  }
}
</script>