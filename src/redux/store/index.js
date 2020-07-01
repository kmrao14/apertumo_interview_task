import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { usersReducer } from '../reducers/usersReducer';


const store = createStore(usersReducer, applyMiddleware(ReduxThunk));

export { store as default }