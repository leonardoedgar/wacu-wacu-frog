const {ADD_COUNTER_CHANNEL} = require('../actions');
/**
 * A function that represents the reducer of the RESTful API.
 * @param prevState {Object} represents previous state of the redux store
 * @param action {Object} represents the new action produced by action creators
 */
const apiReducer = (prevState, action) => {
  switch(action.type) {
    case ADD_COUNTER_CHANNEL: return addCounter(prevState);
    default: return prevState;
  }
};

/**
 * A function to add counter.
 * @param prevState {Object} represents previous state of the redux store
 */
const addCounter = (prevState) => {
  return {"counter": prevState["counter"] + 1}
};

module.exports = {
  apiReducer,
  addCounter
};
