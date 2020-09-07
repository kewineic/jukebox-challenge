<template>
  <div class="button-container">
    <button
      class="button"
      :type="buttonType"
    >{{ buttonValue }}</button>
  </div>
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

<style scoped>

  .button {
    outline: none;

    color: var(--blue-default);
    font-weight: bold;
    font-size: 1.2rem;

    border: 1px solid var(--blue-default);
    background: var(--white-default);

    border-radius: 5px;
    margin-top: 1rem;
    width: 100%;
    height: 2rem;

    transition: .4s;
  }

  .button:hover {
    cursor: pointer;

    color: var(--white-default);

    background: var(--blue-default);
  }
</style>
