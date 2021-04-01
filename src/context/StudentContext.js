import { createContext, useReducer } from "react";
import StudentReducer from "../reducers/StudentReducer";

const initialStudent = [
  {
    name: "ABDUL",
    level: 100,
    dep_date: "27/3/2021",
    ret_date: "27/3/2021",
    reason: "some reason here",
    indexNo: "UST001",
  },
  {
    name: "RAUF",
    level: 200,
    dep_date: "27/3/2021",
    ret_date: "27/3/2021",
    reason: "some reason here",
    indexNo: "UST002",
  },
  {
    name: "NANSIA",
    level: 300,
    dep_date: "27/3/2021",
    ret_date: "27/3/2021",
    reason: "some reason here",
    indexNo: "UST003",
  },
];

export const StudentContext = createContext();
const StudentContextProvider = ({ children }) => {
  const [students, dispatch] = useReducer(
    StudentReducer,
    initialStudent
  );
  return (
    <StudentContext.Provider
      value={{ students, dispatch }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
