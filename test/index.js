import { expect } from 'chai'
import loader from '../'
import fs from 'fs'
import path from 'path'

function test (filename, isEntry) {
  const target = isEntry ? { resourceQuery: '?entry' } : {}
  const filepath = path.join(__dirname, filename)
  const input = fs.readFileSync(filepath + '.vue', {encoding: 'utf-8'})
  const expected = fs.readFileSync(filepath + (isEntry ? '-entry' : '') + '.output', {encoding: 'utf-8'})
  const output = loader.call(target, input)
  expect(output).eql(expected)
}

describe('Loader', () => {
  it('should transform script without changes', () => {
    test('script')
    test('scripts')
  })

  it('should transform style', () => {
    test('style')
    test('styles')
  })

  it('should transform template', () => {
    test('template')
    test('templates')
  })

  it('should transform all together', () => {
    test('foo')
    test('bar')
    test('hello')
  })

  it('should transform entry', () => {
    test('foo', true)
  })
})
