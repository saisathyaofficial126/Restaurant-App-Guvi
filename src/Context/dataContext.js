import { createContext, useContext, useReducer } from "react";
import { dataReducer, initDataState } from "../Reducer/dataReducer";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, initDataState);

  return (
    <dataContext.Provider value={{ dataState, dispatchData }}>
      {children}
    </dataContext.Provider>
  );
};
export const useData = () => useContext(dataContext);
