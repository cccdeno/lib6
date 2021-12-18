// ================== uu6: Useful Utility ========================
export function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function dateToString(date:Date) {
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

export function timeToString(date:Date) {
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}

// format
export function arrayToStr(array:any[], precision:number) { // 將數字陣列轉為字串的函數。
    var rzStr = ''
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= 0) {
        rzStr += ' ' + array[i].toFixed(precision) + ' '
      } else {
        rzStr += array[i].toFixed(precision) + ' '
      }
    }
    return rzStr
}

// debug
export function ok(cond: boolean, errorMsg:string="") {
  if (!cond) throw Error(errorMsg)
}

export function range(begin:number, end:number, step:number=1) {
  let len = Math.floor((end-begin)/step)
  let a = new Array(len)
  let i = 0
  for (let t=begin; t<=end; t+=step) {
    a[i++] = t
  }
  return a
}

export let steps = range

export function near(a:number,b:number,delta:number=0.001) {
  return (Math.abs(a-b) < delta)
}

export function clone(o:any) {
  if (null == o || "object" != typeof o) return o
  if (o.constructor != Object && o.clone != null) return o.clone()
  let r = JSON.parse(JSON.stringify(o)) // 這只會複製非函數欄位！
  if (o.constructor == Object) { // 複製非類別的函數
    for (var attr in o) {
      if (typeof o[attr] === 'function' && o.hasOwnProperty(attr)) r[attr] = o[attr]
    }
  }
  return r
}

export function int(x:number):number {
  return Math.floor(x)
}

export function isInt(x:number):boolean {
  return Number.isInteger(x)
}

const BASE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function baseChars(base:number) {
  ok(base <= BASE.length)
  return BASE.substring(0, base)
}
