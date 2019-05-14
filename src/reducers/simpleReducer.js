const defaultState = {
  '@@test/button': '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
      case '@@test/button':
          return { ...state, ...action };
      default:
          return state;
  }
};