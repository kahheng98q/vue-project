<template>
    <button @click="onClick()" class="btn btn-primary" type="button">
      {{ text }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      text: String,
      color: String,
    },
    methods: {
      onClick() {
        this.$emit('btn-click')
      },
    },
  }
  </script>