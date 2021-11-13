import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AllBlogsReducer } from "./reducers/AllBlogsReducer";
import { AllPartiesReducer } from "./reducers/AllPartiesReducer";
import { ABlogReducer } from "./reducers/SingleBlogReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const reducer = combineReducers({
  AllBlogs: AllBlogsReducer,
  AllParties: AllPartiesReducer,
  SingleBlog: ABlogReducer,
});
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
