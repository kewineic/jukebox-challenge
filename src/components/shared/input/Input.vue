<template>
  <div class="input-container">
    <label class="label" :for="inputName">{{ labelValue }}</label>
        <input
          class="input"
          :placeholder="placeholderValue"
          :id="inputName"
          :type="inputType"
          :name="inputName"
        >
    </div>
</template>

<script>
export default {
  props: {
    labelValue: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    placeholderValue: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

  .label {
    font-size: 1.2rem;
    font-weight: bold;

    margin-top: 1rem;
    display: flex;
    align-items: center;

  }

  .input {
    width: 100%;
    height: 2rem;
    margin-top: .25rem;

    outline: none;
    border: 1px solid black;
    border-radius: 5px;
  }

</style>
