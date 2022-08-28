import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

// Ovajhook nam vraca vrednost provajdera, dakle state i dispatch reducera
// Svaki put kada nam treba nam treba workouts data zovemo ovu f
export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error("useWorkoutsContext samo unutar providera!");
  }

  return context;
};
