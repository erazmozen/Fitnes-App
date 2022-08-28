import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  // Dobijamo iz backenda
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      // pretvaramo u json jer saljemo u db
      body: JSON.stringify(workout),
      // staticno, da kaze da je json
      headers: {
        "Content-Type": "application/json",
      },
    });
    // .json jer uzimamo iz db
    const json = await response.json();
    // handle error
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    // handle reset
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      console.log("jedan dodat, izgleda ovako:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Dodaj!</h3>

      <label>Naziv vezbe:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Tezina u kg:</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Broj ponavljanja:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
