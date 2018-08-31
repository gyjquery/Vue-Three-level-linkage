import {
  RECEIVE_PLACE
} from './mutation-types'

export default {
   [RECEIVE_PLACE] (state, {place}) {
     state.place = place
  }
}
