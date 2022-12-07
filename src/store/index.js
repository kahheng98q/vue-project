import { createStore } from "vuex";
import { moduleA } from "./modules/modules";

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(["./modules/modules"], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    // const newMutations = require('./mutations').default
    const newModuleA = require("./modules/modules").default;
    // swap in the new modules and mutations
    store.hotUpdate({
      // mutations: newMutations,
      modules: {
        a: newModuleA,
      },
    });
  });
}

export const store = createStore({
  modules: {
    a: moduleA,
  },
});
