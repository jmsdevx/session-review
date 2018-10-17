import { bindActionCreators } from "C:/Users/Jshee/AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux";

// initial state
const initialState = {
  name: ""
};

// constants
const UPDATE_NAME = "UPDATE_NAME";

// action creators
export function addData(newData) {
  console.log(newData);
  return {
    type: UPDATE_NAME,
    payload: newData
  };
}

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      let newData = action.payload;
      console.log(newData);
      return {
        ...state,
        name: action.payload
      };

    default:
      return state;
  }
}
