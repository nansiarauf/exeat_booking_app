const StudentReducer = (state, action) => {
  switch (action.type) {
    case "ADDSTUDENT":
      const {
        name,
        level,
        dep_date,
        ret_date,
        location,
        reason,
        indexNo,
      } = action.payload;
      return [
        {
          name,
          level,
          dep_date,
          ret_date,
          location,
          reason,
          indexNo,
        },
        ...state,
      ];

    case "DELETE":
      return state.filter(
        (student) =>
          student.indexNo !== action.payload
      );
    default:
      return state;
  }
};
export default StudentReducer;
