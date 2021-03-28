import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Students = () => {
  const { students, dispatch } = useContext(
    StudentContext
  );
  return (
    <table className="w-100 table-bordered mt-5 table-hover bg-white">
      <thead className="bg-success text-white">
        <tr>
          <th className="text-center">NAME</th>
          <th className="text-center">LEVEL</th>
          <th className="text-center">REASON</th>
          <th className="text-center">
            LOCATION
          </th>
          <th className="text-center">
            RET. DATE
          </th>
          <th className="text-center">
            DEP. DATE
          </th>
          <th className="text-center">INDEX</th>
          <th className="text-center">DELETE</th>
        </tr>
      </thead>
      {students.map((student, i) => (
        <tr
          className={
            i % 2 === 0 ? "table-active" : ""
          }
        >
          <td>{student.name}</td>
          <td className="text-center">
            {student.level}
          </td>
          <td>{student.reason}</td>
          <td className="text-center">
            {student.location}
          </td>
          <td className="text-center">
            {student.dep_date}
          </td>
          <td className="text-center">
            {student.ret_date}
          </td>
          <td className="text-center">
            {student.indexNo}
          </td>
          <td className="text-right">
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  payload: student.indexNo,
                })
              }
            >
              X
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Students;
