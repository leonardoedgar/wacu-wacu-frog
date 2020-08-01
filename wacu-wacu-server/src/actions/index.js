const ADD_COUNTER_CHANNEL = 'ADD_COUNTER';
/**
 * Action creator to add counter.
 */
const addCounter = () => {
  return {
    type: ADD_COUNTER_CHANNEL
  };
};

module.exports = {
  ADD_COUNTER_CHANNEL,
  addCounter
};