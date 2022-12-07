// 公共的方法/类
// 防抖函数
export function debounce (fun, delay = 200) {
  let timer = null
  return function (...arg) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, arg)
    }, delay)
  }
}
