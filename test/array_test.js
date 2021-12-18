import {ok, eq} from 'https://deno.land/x/tdd/mod.ts'
import * as lib6 from '../mod.ts'

Deno.test('array', async function() {
  let a = [1,2,3]
  let b = lib6.map1(a, (x)=>x*x)
  console.log('b=', b)
  eq(b, [1,4,9])
  let c = lib6.map2(a, b, (x,y)=>x+y)
  eq(c, [2,6,12])

  let ta = ["1", "2", "3"]
  let ia = lib6.toNumber(ta)
  console.log('ia=', ia)
  eq(a, ia)
})