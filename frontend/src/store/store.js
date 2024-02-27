import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  searchQuery: "",
  searchQueryAdmin: "",
  selectedDistrict: "",
  userRole: "",
  wellId: "",
  selectedWellSort: "",
  selectedUserSort: "",
  selectedUserRole: "",
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "searchQueryAdmin",
    "searchQuery",
    "selectedDistrict",
    "userRole",
    //"wellId",
    "selectedWellSort",
    "selectedUserSort",
    "selectedUserRole",
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "SET_SEARCH_QUERY_ADMIN":
      return {
        ...state,
        searchQueryAdmin: action.payload,
      };
    case "SET_SELECTED_DISTRICT":
      return {
        ...state,
        selectedDistrict: action.payload,
      };
    case "SET_USER_ROLE":
      return {
        ...state,
        userRole: action.payload,
      };
    case "SET_WELL_ID":
      return {
        ...state,
        wellId: action.payload,
      };
    case "SET_SELECTED_WELL_SORT":
      return {
        ...state,
        selectedWellSort: action.payload,
      };
    case "SET_SELECTED_USER_SORT":
      return {
        ...state,
        selectedUserSort: action.payload,
      };
    case "SET_SELECTED_USER_ROLE":
      return {
        ...state,
        selectedUserRole: action.payload,
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
