//reducer : is a function that accepts state and action and returns a new state
//handle actions in reducer
//remember :each reducer handle a slice of the state(a portion of the entire reducer store)
const INITIAL_STATE = {
  course: []
};
const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_COURSE":
      //return an updated of state
      return [...state, { ...action.course }];
    //clone state by spread
    default:
      return state;
  }
};
export default courseReducer;
