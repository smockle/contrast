import Hex from '../lib/hex'
import test from 'tape'
import util from 'util'

test('Hex', t => {
  t.plan(7)
  t.equal(Hex('#FF').value, 'FF', 'constructor, with #')
  t.equal(Hex('FF').value, 'FF', 'constructor, without #')
  t.equal(Hex('ff').value, 'FF', 'constructor, lowercase')
  t.equal(Hex().value, null, 'constructor, no args')
  t.equal(Hex('#80').valueOf(), '80', 'valueOf')
  t.equal(util.inspect(Hex('#80')), '#80', 'inspect')
  t.equal(Hex('#80').toEightBit().valueOf(), 128, 'toEightBit')
})
