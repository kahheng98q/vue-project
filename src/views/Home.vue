<template>
 <AddTask v-show="showAddTask" @add-task="addTask" /> 
  <!-- <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  /> -->

<!-- <h1>Add Task</h1> -->
<!-- <div v-for="task in allTasks" v-bind:key="task.id" class="task">
{{task.text}}
</div>
<div>{{count}}</div> -->
</template>

<script>
// import Tasks from '../components/Tasks'
import AddTask from '../components/Task/AddTask'
import {actionName} from '../constant/constant'
import { mapActions ,mapGetters} from "vuex";

export default {
  name: 'Home',
  props: {
  },
  components: {
    // Tasks,
    AddTask,
  },
  data() {
    return {
       userID:"63faf0dcacae472b009eca49"
    }
  }, 
  methods: {
   ...mapActions(
    [actionName.ADD_TASK,actionName.DELETE_TASK,actionName.TOGGLE_REMINDER,actionName.FETCH_TASKS]
    )
  },
  computed:{
    ...mapGetters(['allTasks','count','showAddTask'])
  },
  async created(){
  //  await this.fetchTasks(this.userID);
  }

}
</script>