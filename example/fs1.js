import * as D from 'https://deno.land/x/lib6/mod.ts'

console.log(await D.dirList('..'))
console.log(await D.readFile('./fs1.js'))
