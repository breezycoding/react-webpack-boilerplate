/*Store creation*/
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
import dummyData from "./../reducers/dummy";


export default () => {
	const middleware = applyMiddleware(reduxThunk);
	const store = createStore(
		combineReducers({
			dummyData
		}),
		compose(middleware)
	);
	return store;
};