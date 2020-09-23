<template>
  <v-btn 
    large
    class="ma-2" 
    id="testing"
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

<style src="./styles.scss" lang="scss" scoped>

</style>
