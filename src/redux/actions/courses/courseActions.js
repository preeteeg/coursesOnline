//step 2 : redux action
export const createCourse = course => ({
  type: "CREATE_COURSE", // this object is an action, so the function is called the 'action creator'
  // all actions must have a type property

  course: course
});
