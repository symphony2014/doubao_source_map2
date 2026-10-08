// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'definePropertiesHelper'
// - Resolved require(581987) to 'define-properties-helper'
// - Resolved require(553786) to 'weak-data-metadata-manager'
// - Renamed variable 'a' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 'u' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'c' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'f' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 's' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 'l' to 'arrayIterationPolyfill'
// - Resolved require(343120) to 'array-iteration-polyfill'
// - Renamed variable 'v' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'p' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 729395
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var definePropertiesHelper = require("define-properties-helper") /*id: 581987*/;
  var i = require("weak-data-metadata-manager") /*id: 553786*/.getWeakData;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var arrayIterationPolyfill = require("array-iteration-polyfill") /*id: 343120*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var h = objectStateManager.set;
  var d = objectStateManager.getterFor;
  var y = arrayIterationPolyfill.find;
  var g = arrayIterationPolyfill.findIndex;
  var b = functionBindFallback([].splice);
  var w = 0;
  function m(t) {
    return t.frozen ||= new x();
  }
  function x() {
    this.entries = [];
  }
  function A(t, r) {
    return y(t.entries, function (t) {
      return t[0] === r;
    });
  }
  x.prototype = {
    get: function (t) {
      var r = A(this, t);
      if (r) {
        return r[1];
      }
    },
    has: function (t) {
      return !!A(this, t);
    },
    set: function (t, r) {
      var e = A(this, t);
      if (e) {
        e[1] = r;
      } else {
        this.entries.push([t, r]);
      }
    },
    delete: function (t) {
      var r = g(this.entries, function (r) {
        return r[0] === t;
      });
      if (~r) {
        b(this.entries, r, 1);
      }
      return !!~r;
    }
  };
  module.exports = {
    getConstructor: function (t, r, e, n) {
      var l = t(function (t, o) {
        validatePrototypeInvocation(t, p);
        h(t, {
          type: r,
          id: w++,
          frozen: null
        });
        if (!isNullishCheck_1(o)) {
          iteratorForEachHelper(o, t[n], {
            that: t,
            AS_ENTRIES: e
          });
        }
      });
      var p = l.prototype;
      var y = d(r);
      function g(t, r, e) {
        var n = y(t);
        var o = i(requireObjectOrThrowTypeError_1(r), true);
        if (o === true) {
          m(n).set(r, e);
        } else {
          o[n.id] = e;
        }
        return t;
      }
      definePropertiesHelper(p, {
        delete: function (t) {
          var r = y(this);
          if (!isObjectOrFunctionCheck(t)) {
            return false;
          }
          var e = i(t);
          if (e === true) {
            return m(r).delete(t);
          } else {
            return e && objectHasOwnPolyfill_1(e, r.id) && delete e[r.id];
          }
        },
        has: function (t) {
          var r = y(this);
          if (!isObjectOrFunctionCheck(t)) {
            return false;
          }
          var e = i(t);
          if (e === true) {
            return m(r).has(t);
          } else {
            return e && objectHasOwnPolyfill_1(e, r.id);
          }
        }
      });
      definePropertiesHelper(p, e ? {
        get: function (t) {
          var r = y(this);
          if (isObjectOrFunctionCheck(t)) {
            var e = i(t);
            if (e === true) {
              return m(r).get(t);
            }
            if (e) {
              return e[r.id];
            }
          }
        },
        set: function (t, r) {
          return g(this, t, r);
        }
      } : {
        add: function (t) {
          return g(this, t, true);
        }
      });
      return l;
    }
  };
}