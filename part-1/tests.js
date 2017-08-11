const { assert } = require('chai')
const { month } = require('./functions')
console.log('is this thing working???')

describe('month', function() {
  it('should return the correct month for the given date', function() {
    assert.equal(month('2017, 01, 10'), 'January')
  })

  it('should not return  ')

})
