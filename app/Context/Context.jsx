import { createContext, useContext, useReducer } from "react";
import {
  ActiveIndex,
  City,
  Firstname,
  Ordermodel,
  Ordersummary,
  Province,
  TotalSummary,
  
} from "./Constants";
export const DataModel = createContext();
const DataProvider = ({ children }) => {
  //State
  const initialState = {
    IndexValue: false,
    orderSummary: false,
    totalSummary: false,
    firstname: false,
    city: false,
    province: false,
    orderModel : false,
    orderOk : null
  };
  //Reducer Fucntion
  const reducer = (state, action) => {
    switch (action.type) {
      case ActiveIndex:
        return { ...state, IndexValue: action.payload };
      case Ordersummary:
        return { ...state, orderSummary: action.payload };
      case TotalSummary:
        return { ...state, totalSummary: action.payload };
      case Firstname:
        return { ...state, firstname: action.payload };
      case City:
        return { ...state, city: action.payload };
      case Province:
        return { ...state, province: action.payload };
        case Ordermodel:
          return { ...state, orderModel: action.payload };
      default:
        return state;
    }
  };
  //State
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataModel.Provider value={{ dispatch, state }}>
      {children}
    </DataModel.Provider>
  );
};

const DataState = () => {
  const data = useContext(DataModel);
  return data;
};
export { DataProvider, DataState };
