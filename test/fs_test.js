import * as tdd from 'https://deno.land/x/tdd/mod.ts'
import * as lib6 from '../mod.ts'

Deno.test('fs', async function() {
  let ccc = {name:'ccc', age:52}
  await lib6.writeJson('ccc.json', ccc)
  let ccc2 = await lib6.readJson('ccc.json')
  console.log('ccc2=', ccc2)
  // tdd.ok(tdd.eq(ccc, ccc2))
})