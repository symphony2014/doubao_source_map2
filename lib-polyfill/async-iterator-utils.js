// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'u' to 'validateMaxIndex_1'
// - Resolved require(46643) to 'validate-max-index_1'
// - Renamed variable 'c' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'f' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 's' to 'polyfillFunctionReturnUtil'
// - Resolved require(255087) to 'polyfill-function-return-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 149116
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var validateMaxIndex_1 = require("validate-max-index_1") /*id: 46643*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var polyfillFunctionReturnUtil = require("polyfill-function-return-util") /*id: 255087*/;
  function l(t) {
    var r = t === 0;
    var e = t === 1;
    var l = t === 2;
    var v = t === 3;
    return function (t, p, h) {
      requireObjectOrThrowTypeError_1(t);
      var d = p !== undefined;
      if (d || !r) {
        functionValidator(p);
      }
      var y = iteratorWrapperHelper(t);
      var g = globalPolyfillAccess("Promise");
      var b = y.iterator;
      var w = y.next;
      var m = 0;
      return new g(function (t, o) {
        function c(t) {
          polyfillFunctionReturnUtil(b, o, t, o);
        }
        function f() {
          try {
            if (d) {
              try {
                validateMaxIndex_1(m);
              } catch (t) {
                c(t);
              }
            }
            g.resolve(requireObjectOrThrowTypeError_1(callBindPolyfill(w, b))).then(function (n) {
              try {
                if (requireObjectOrThrowTypeError_1(n).done) {
                  if (r) {
                    h.length = m;
                    t(h);
                  } else {
                    t(!v && (l || undefined));
                  }
                } else {
                  var u = n.value;
                  try {
                    if (d) {
                      var y = p(u, m);
                      function w(n) {
                        if (e) {
                          f();
                        } else if (l) {
                          if (n) {
                            f();
                          } else {
                            polyfillFunctionReturnUtil(b, t, false, o);
                          }
                        } else if (r) {
                          try {
                            h[m++] = n;
                            f();
                          } catch (t) {
                            c(t);
                          }
                        } else if (n) {
                          polyfillFunctionReturnUtil(b, t, v || u, o);
                        } else {
                          f();
                        }
                      }
                      if (isObjectOrFunctionCheck(y)) {
                        g.resolve(y).then(w, c);
                      } else {
                        w(y);
                      }
                    } else {
                      h[m++] = u;
                      f();
                    }
                  } catch (t) {
                    c(t);
                  }
                }
              } catch (t) {
                o(t);
              }
            }, o);
          } catch (t) {
            o(t);
          }
        }
        f();
      });
    };
  }
  module.exports = {
    toArray: l(0),
    forEach: l(1),
    every: l(2),
    some: l(3),
    find: l(4)
  };
}