import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

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
    }
    // handle reset
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
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
      />

      <label>Tezina u kg:</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Broj ponavljanja:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
