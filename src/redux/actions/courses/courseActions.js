import * as types from "./actionTypes";
//step 2 : redux action
export const createCourse = course => ({
  type: types.CREATE_COURSE, // this object is an action, so the function is called the 'action creator'
  // all actions must have a type property

  course: course
});
