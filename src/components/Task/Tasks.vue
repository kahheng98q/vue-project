<template>
    <div :key="task.id" v-for="task in tasks">
      
      <Task
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
      />
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import { getterName } from "../../constant/constant";
  import Task from './Task'
  
  export default {
    name: 'Tasks',
    props: {
      // tasks: Array
    },
    components: {
      Task,
    },
    computed: {
       ...mapGetters({
        tasks: getterName.ALL_TASKS
    }),

    },
    emits: ['delete-task', 'toggle-reminder'],
  }
  </script>