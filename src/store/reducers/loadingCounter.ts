import { ADD, MINUS } from '../constants/loadingCounter'

const INITIAL_STATE = {
  num: 0
}

export default function loadingCounter (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
