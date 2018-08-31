import {
  RECEIVE_PLACE
} from './mutation-types'
import {
  reqPlace
} from '../api'

export default {
 // 异步获取头部导航信息action
 async getPlace ({commit}) {
    let result = await reqPlace()
    if(result.code === 0){
     const place = result.data
      commit(RECEIVE_PLACE,{place})
    }
  }

}
