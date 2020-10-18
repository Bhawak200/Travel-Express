

const INITIAL_STATE = {
    items: []
  }

const serviceReducer=(state=INITIAL_STATE,action)=>{
    debugger
     switch(action.type){
         case 'FETCH_SERVICE':
             return {...state,items:action.services}
         default:
             return state
     }
}

export default serviceReducer