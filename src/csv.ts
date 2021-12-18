export function loadCsv(text:string, delimiter:string=",") {
    let lines = text.split("\n")
    let table:string[][] = []
    for (let li in lines) {
        let line = lines[li].trim()
        if (line.length == 0) continue
        let tokens = line.split(delimiter)
        table.push(tokens)
    }
    return table
}

export function cols(table:any[][], from:number, to:number) {
    let cTo = Math.min(to, table[0].length)
    let r:any[][] = new Array(table.length)
    for (let i in table) {
        r[i] = table[i].slice(from, cTo) 
    }
    return r
}
