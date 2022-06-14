import {
  ADD,
  MINUS
} from '../constants/loadingCounter'

export const add = () => {
  return {
    type: ADD
  }
}

export const minus = () => {
  return {
    type: MINUS
  }
}
