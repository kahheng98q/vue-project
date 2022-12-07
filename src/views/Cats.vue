<template>
  <div :key="cat.name"  v-for="cat in cats">
    <div @dblclick="$emit('delete-cats',cat.name)"> 
      <h3 >{{cat.name}}</h3>
    </div>

  </div>
</template>
<script>
export default {
  name: "Cats",
  props: { cats:Array },
  emits:['delete-cats']
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  