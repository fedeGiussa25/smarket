import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
    form
});

const rootReducer = (state, action) => reducers(state, action);

const store = createStore(rootReducer);

export default store;
