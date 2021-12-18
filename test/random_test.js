import {ok} from 'https://deno.land/x/tdd/mod.ts'
import * as lib6 from '../mod.ts'

Deno.test('random', function() {
  let s1 = lib6.randomBaseStr(62, 10)
  console.log('s1=', s1)
  ok(s1.length===10)

  let u1 = lib6.uuid()
  console.log('u1=', u1)
})
