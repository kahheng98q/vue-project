<template>
<div class="app">

    <Sidebar />
    <main >
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" />
    <Tasks/>
    </main>
    <router-view :showAddTask="showAddTask"></router-view>


    <Footer />
  </div>

</template>
   
<script>
  //  :showAddTask="showAddTask"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Tasks from './components/Task/Tasks'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar,
    Tasks
  },
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>


<style lang="scss">

:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>