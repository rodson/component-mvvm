let store = {
  state: {
    message: 'hello!'
  },
  setMessageAction(newValue) {
    this.state.message = newValue;
  },
  clearMessageAction() {
    this.state.message = '';
  }
};

let vmA = new Vue({
  el: '#root1',
  data: store.state
});

let vmB = new Vue({
  el: '#root2',
  data: store.state,
  methods: {
    setMessage: store.setMessageAction.bind(store, "hello rodson"),
    clearMessage: store.clearMessageAction.bind(store)
  }
});
