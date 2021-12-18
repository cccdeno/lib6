export function array(n: number, value: any = 0) {
    if (n <= 0) throw Error('array: n should be > 0')
    let a = new Array(n)
    return a.fill(value)
}

export function repeats(n: number, f: () => any) {
    let r = new Array(n)
    for (let i = 0; i < n; i++) {
        r[i] = f()
    }
    return r
}

export function last(a: any[]) {
    return a[a.length - 1]
}

export function map1(a: any, f: (x: any) => any) {
    if (a instanceof Array) {
        var fa = new Array(a.length)
        for (var i = 0; i < a.length; i++) {
            fa[i] = map1(a[i], f)
        }
        return fa
    } else {
        return f(a)
    }
}

export function map2(a: any, b: any, f: (x: any, y: any) => any) {
    if (a instanceof Array) {
        var fa = new Array(a.length)
        var isArrayB = (b instanceof Array)
        for (var i = 0; i < a.length; i++) {
            var bi = isArrayB ? b[i] : b
            fa[i] = map2(a[i], bi, f)
        }
        return fa
    } else {
        return f(a, b)
    }
}

export function reduce(a: any, f: any, init: (x: any) => any) {
    var result = init
    if (a instanceof Array) {
        for (var i in a) {
            result = f(result, reduce(a[i], f, init))
        }
    } else {
        result = f(result, a)
    }
    return result
}

// ================ map to ...=================
export function toNumber(a:any) {
    return map1(a, (o)=>parseFloat(o))
}
