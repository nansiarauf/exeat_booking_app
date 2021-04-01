import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

const AddStudent = () => {
  const { dispatch } = useContext(StudentContext);
  const [name, setName] = useState();
  const [level, setLevel] = useState();
  const [dep_date, setDepDate] = useState();
  const [ret_date, setRetDate] = useState();
  const [reason, setReason] = useState();
  const [indexNo, setIndexNo] = useState();
  const [location, setLocation] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADDSTUDENT",
      payload: {
        name,
        level,
        dep_date,
        ret_date,
        reason,
        location,
        indexNo,
      },
    });
  };
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="col-12 mt-5 border p-5"
      >
        <input
          type="text"
          placeholder="Student name"
          onChange={(t) =>
            setName(t.target.value)
          }
          className="form-control"
          required
        />
        <input
          type="number"
          placeholder="Student level"
          onChange={(t) =>
            setLevel(t.target.value)
          }
          className="form-control"
          required
        />
        <input
          type="text"
          placeholder="Reason for Exeat"
          onChange={(t) =>
            setReason(t.target.value)
          }
          className="form-control"
          required
        />
        <input
          type="text"
          placeholder="Destination"
          onChange={(t) =>
            setLocation(t.target.value)
          }
          className="form-control"
          required
        />
        <div className="form-group">
          <label> Departure date</label>
          <input
            type="date"
            placeholder="Departure date"
            onChange={(t) =>
              setDepDate(t.target.value)
            }
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label> Return date</label>
          <input
            type="date"
            placeholder="Return date"
            onChange={(t) =>
              setRetDate(t.target.value)
            }
            className="form-control"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Index number"
          onChange={(t) =>
            setIndexNo(t.target.value)
          }
          className="form-control"
          required
        />
        <button className="form-control btn btn-success">
          ADD
        </button>
      </form>
    </>
  );
};

export default AddStudent;
