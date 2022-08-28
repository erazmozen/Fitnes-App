import { createContext, useReducer } from "react";

// Dodajemo novi kontekst
export const WorkoutsContext = createContext();

// state je prethodni state
export const workoutsReducer = (state, action) => {
  // prvo da vidimo sta zelimo da radimo, uparujemo
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        // filter prolazi sve i vraca true ili false | w je pojedini w
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// Deklarisemo context provider
// Izvlacimo iz njega "decu", app.js
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });
  // dispatch se poziva da se edotike state
  // prvo ide key po kome se kasnije akcija uparuje
  // drugo je data koji nam treba kako bismo zavrsili promenu
  // Kada pozovemo dispatch zove se i workoutsReducer (reducer funkcija)
  //   dispatch({type:'CREATE_WORKOUT', payload: [{},{}] })

  // pravimo template
  // Saljemo reducer u ostale komponente zao objekat
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
