import { reactive, readonly } from "vue";

const state = reactive({
  count: 0,
});

// GETTERS
const increment = () => {
  SET_COUNT(state.count + 1);
};

// SETTERS
const SET_COUNT = (count) => {
  state.count = count;
};

export default { state: readonly(state), increment, SET_COUNT };
