<template>

  <header>
    <h1>{{ title }}</h1>
    <h1>{{ countAlias }}</h1>
    <Button v-show="homePage" @btn-click="changeIsShowAddTask" :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'" />
  </header>
</template>
  
<script>
import Button from './Inputs/Button'
import { mutationName } from "../constant/constant";
import { mapState, mapMutations,mapGetters } from 'vuex';

export default {
  name: 'Header',
  props: {
    title: String,

  },
  data: () => ({
  }),
  components: {
    Button,
  },
  computed: {
    ...mapState({
      // showAddTask: state => state.showAddTask,
      countAlias:  state => state.showAddTask,
    }),
    ...mapGetters({
      showAddTask:'showAddTask'
    }),
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    ...mapMutations({
      changeIsShowAddTask: mutationName.CHANGE_IS_SHOW_ADD_TASK
    }),
  },

}
</script>
  
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>