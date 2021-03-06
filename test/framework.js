(function(exports) {
  function matchers(arg) {
    return {
      toEqual: function(argTwo) {
        if (arg !== argTwo) {
          console.log('   %cF', 'color:red')
          throw new Error(`Assertion failed: ${arg} does not equal ${argTwo}`)
        } else {
          console.log('   %cP', 'color:green')
        }
      },
      toBeInstanceOf: function(argTwo) {
        if (arg instanceof argTwo) {
          console.log('   %cP', 'color:green')
        } else {
          console.log('   %cF', 'color:red')
          throw new Error(`Assertion failed: ${arg} is not an instance of ${argTwo}`)
        }
      },
    }
  }

  function expect(arg) {
    return matchers(arg)
  }

  function describe(desc, func) {
    console.log(desc)
    return func()
  }

  function it(msg, func) {
    console.log(msg)
    return func()
    // the same >> return describe(msg, func)
  }

  exports.expect = expect
  exports.describe = describe
  exports.it = it
})(this)
