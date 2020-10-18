
import {createStore,combineReducers} from 'redux'
import serviceReducer from '../reducer/index.js'

const addPromiseToDispatch = store => {
    const dispatch = store.dispatch
  
    return action => {
      if (typeof action.then === 'function') {
        return action.then(dispatch)
      }
  
      return dispatch(action)
    }
  }
const initstore=()=>
{
    const service=combineReducers({
        service: serviceReducer
    })
    const store=createStore(service,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    store.dispatch=addPromiseToDispatch(store)
    return store;
}

export default initstore