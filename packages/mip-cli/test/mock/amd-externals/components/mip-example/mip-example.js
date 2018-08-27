import {sayHi} from './utils'
import {sayBye} from '../../common/utils'

import item from './mip-example-item'

export default {
  mounted () {
    sayHi()

    import('etpl/src/main').then(function (etpl) {
      console.log(etpl.version)
    })
  },
  destroyed () {
    sayBye()
  },
  components: {
    item
  }
}
