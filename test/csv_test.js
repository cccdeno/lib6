import {ok, eq} from 'https://deno.land/x/tdd/mod.ts'
import * as lib6 from '../mod.ts'

Deno.test('csv', async function() {
  let csv1 = `
name, age
ccc, 52
snoopy, 3
garfield, 7
`
  let table1 = lib6.loadCsv(csv1)
  console.log('table1=', table1)
  eq(table1.length, 4)
})

