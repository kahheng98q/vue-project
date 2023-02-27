import { actionName, mutationName } from "../../constant/constant";

export const moduleA = {
  state: () => ({
    count: 1,
    tasks: [],
    showAddTask: false,
  }),
  getters: {
    allTasks: (state) => state.tasks,
    count: (state) => state.count,
    showAddTask: (state) => state.showAddTask,
  },
  mutations: {
    [mutationName.SET_TASKS]: (state, tasks) => (state.tasks = tasks),
    [mutationName.CHANGE_IS_SHOW_ADD_TASK]: (state) => {
      state.showAddTask = !state.showAddTask;
    },
  },
  actions: {
    async [actionName.ADD_TASK](task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async [actionName.DELETE_TASK](id) {
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task");
      }
    },
    async [actionName.TOGGLE_REMINDER](id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      });
      const data = await res.json();
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async [actionName.FETCH_TASKS](state) {
      const res = await fetch("api/todos");
      const data = await res.json();
      // console.log("teseqwet");
      state.commit(mutationName.SET_TASKS, data);
    },
    async fetchTask(state, id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();

      state.tasks = data;
    },
  },
};
