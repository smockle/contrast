const { EightBit, EightBitColor, Hex, HexColor, Contrast } = require('../lib/')
const util = require('util')
const test = require('tape')

test('EightBit', t => {
  t.plan(5)
  t.equal(EightBit(128).value, 128, 'constructor')
  t.equal(EightBit(128).valueOf(), 128, 'valueOf')
  t.equal(util.inspect(EightBit(128)), 'EightBit(128)', 'inspect')
  t.equal(EightBit(128).linearize(), 0.2195197180748679, 'linearize')
  t.equal(util.inspect(EightBit(128).toHex()), '#80', 'toHex')
})

test('EightBitColor', t => {
  t.plan(6)
  t.equal(
    EightBitColor(0, 128, 255).G.valueOf(),
    128,
    'constructor, with Number'
  )
  t.equal(
    EightBitColor(EightBit(0), EightBit(128), EightBit(255)).G.valueOf(),
    128,
    'constructor, with EightBit'
  )
  t.deepEqual(
    EightBitColor(0, 128, 255).valueOf(),
    { R: 0, G: 128, B: 255 },
    'valueOf'
  )
  t.equal(
    util.inspect(EightBitColor(0, 128, 255)),
    'rgb(0, 128, 255)',
    'inspect'
  )
  t.equal(
    EightBitColor(0, 128, 255).luminosity(),
    0.2292005023671455,
    'luminosity'
  )
  t.equal(
    util.inspect(EightBitColor(0, 128, 255).toHexColor()),
    '#0080FF',
    'toHexColor'
  )
})

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

test('HexColor', t => {
  t.plan(11)
  t.equal(HexColor('#0080FF').G.valueOf(), '80', 'constructor')
  t.equal(HexColor('#80').value, '808080', 'constructor, two-length')
  t.equal(HexColor('#FC0').value, 'FFCC00', 'constructor, three-length')
  t.equal(HexColor('#0080FF').value, '0080FF', 'constructor, six-length')
  t.equal(HexColor('black').value, '000000', 'constructor, black')
  t.equal(HexColor('white').value, 'FFFFFF', 'constructor, white')
  t.equal(HexColor().value, null, 'constructor, no args')
  t.equal(HexColor('#0080FF').valueOf(), '0080FF', 'valueOf, inherited')
  t.equal(util.inspect(HexColor('#0080FF')), '#0080FF', 'inspect, inherited')
  t.ok(
    !Object.getPrototypeOf(HexColor('#0080FF')).hasOwnProperty('toEightBit'),
    'toEightBit, removed'
  )
  t.deepEqual(
    HexColor('#0080FF').toEightBitColor().valueOf(),
    { R: 0, G: 128, B: 255 },
    'toEightBitColor'
  )
})

test('Contrast', t => {
  t.plan(4)
  t.equal(
    Contrast('#0080FF', '#FFFFFF').foreground.valueOf(),
    '0080FF',
    'constructor'
  )
  t.equal(
    Contrast('#0080FF', '#FFFFFF').value,
    3.796322871580839,
    'constructor, value'
  )
  t.equal(
    Contrast('#0080FF', '#FFFFFF').valueOf(),
    3.796322871580839,
    'valueOf'
  )
  t.equal(
    util.inspect(Contrast('#0080FF', '#FFFFFF')),
    '3.796322871580839:1',
    'inspect'
  )
})
