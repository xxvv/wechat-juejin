import wepy from 'wepy'

export default async function fetch(opts) {
  wepy.showNavigationBarLoading()
  let _opts = {
    method: 'get',
    url: ''
  }
  if (typeof opts === 'string') _opts = opts
  if (typeof opts === 'object') Object.assign(_opts, opts)
  let res = await wepy.request(_opts)
  wepy.hideNavigationBarLoading()
  return res.data
}
