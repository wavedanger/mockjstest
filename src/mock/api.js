import mock from 'mockjs'
// 这个一个获取URL参数的方法
import { getParams } from './utils'
const Random = mock.Random
const testurl = 'http://your.domain.com/test'
// mock.mock(testurl, {
//   'users|1-10': [{
//     'id|+1': 1,
//     'name': '@cname',
//     'city': '@city',
//     'image': '@image'
//   }]
// })
// 在这里编写你的逻辑代码

mock.mock(RegExp(testurl + ".*"), "get", (options => {
  let num = getParams(options.url, 'num')
  let users = []
  for (let i = 0; i < num; i++) {
    let newobj = {
      id: i + 1,
      name: Random.cname(),
      city: Random.city(),
      image: Random.image()
    }
    users.push(newobj)
  }
  return mock.mock({ users })
}))