import { ok } from "./util.ts"

export function random(min: number = 0, max: number = 1) {
    return min + Math.random() * (max - min)
}

export function randomInt(min: number, max: number) {
    return Math.floor(random(min, max))
}

export function randomChoose(a: any[]) {
    return a[randomInt(0, a.length)]
}

const BASE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function randomBaseStr(base:number, len:number) {
    ok(base <= BASE.length)
    let list = []
    for (let i=0; i<len; i++) {
        let ci = randomInt(0, base)
        list.push(BASE[ci])
    }
    return list.join('')
}

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export function guid() {
    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export function uuid() {
  return crypto.randomUUID()
}

