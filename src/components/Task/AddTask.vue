<template>
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Task</label>
        <input type="text" v-model="text" name="text" placeholder="Add Task" />
      </div>
      <div class="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          v-model="day"
          name="day"
          placeholder="Add Day & Time"
        />
      </div>
      <div class="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" v-model="reminder" name="reminder" />
      </div>
  
      <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
  </template>
  
  <script>
import {actionName} from '../../constant/constant'
import { mapActions } from "vuex";

  export default {
    name: 'AddTask',
    data() {
      return {
        text: '',
        day: '',
        reminder: false,
        userID:"63f99c1ad0f5ed39be372bb5"
      }
    },
    methods: {
      
    ...mapActions(
      [actionName.ADD_TASK,actionName.DELETE_TASK]
    ),
     async onSubmit(e) {
        e.preventDefault()
        if (!this.text) {
          alert('Please add a task')
          return
        }
        const newTask = {

          taskName: this.text,
          toDate: this.day,
          isReminder: this.reminder,
        }
        await this.addTask(  {id:this.userID,task:newTask} );
        // this.$emit('add-task', newTask)
        // this.text = ''
        // this.day = ''
        // this.reminder = false
      },
    }
    ,
  }
  </script>
  
  <style scoped>
  .add-form {
    margin-bottom: 40px;
  }
  .form-control {
    margin: 20px 0;
  }
  .form-control label {
    display: block;
  }
  .form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  .form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form-control-check label {
    flex: 1;
  }
  .form-control-check input {
    flex: 2;
    height: 20px;
  }
  </style>