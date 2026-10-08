// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'i' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'a' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'u' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 'c' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'f' to 'definePropertiesHelper'
// - Resolved require(581987) to 'define-properties-helper'
// - Renamed variable 's' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'l' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'v' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'p' to 'asyncDisposeUtil'
// - Resolved require(387831) to 'async-dispose-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 840785
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var definePropertiesHelper = require("define-properties-helper") /*id: 581987*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var asyncDisposeUtil = require("async-dispose-util") /*id: 387831*/;
  var h = globalPolyfillAccess("SuppressedError");
  var d = ReferenceError;
  var y = coreJsWksAccess("dispose");
  var g = coreJsWksAccess("toStringTag");
  var b = "DisposableStack";
  var w = objectStateManager.set;
  var m = objectStateManager.getterFor(b);
  var x = "sync-dispose";
  var A = "disposed";
  function E(t) {
    var r = m(t);
    if (r.state === A) {
      throw new d(b + " already disposed");
    }
    return r;
  }
  function S() {
    w(validatePrototypeInvocation(this, O), {
      type: b,
      state: "pending",
      stack: []
    });
    if (!es5PropertyDescriptorCheck) {
      this.disposed = false;
    }
  }
  var O = S.prototype;
  definePropertiesHelper(O, {
    dispose: function () {
      var t;
      var r = m(this);
      if (r.state !== A) {
        r.state = A;
        if (!es5PropertyDescriptorCheck) {
          this.disposed = true;
        }
        var e = r.stack;
        var n = e.length;
        var i = false;
        while (n) {
          var a = e[--n];
          e[n] = null;
          try {
            a();
          } catch (r) {
            if (i) {
              t = new h(r, t);
            } else {
              i = true;
              t = r;
            }
          }
        }
        r.stack = null;
        if (i) {
          throw t;
        }
      }
    },
    use: function (t) {
      asyncDisposeUtil(E(this), t, x);
      return t;
    },
    adopt: function (t, r) {
      var e = E(this);
      functionValidator(r);
      asyncDisposeUtil(e, undefined, x, function () {
        r(t);
      });
      return t;
    },
    defer: function (t) {
      var r = E(this);
      functionValidator(t);
      asyncDisposeUtil(r, undefined, x, t);
    },
    move: function () {
      var t = E(this);
      var r = new S();
      m(r).stack = t.stack;
      t.stack = [];
      t.state = A;
      if (!es5PropertyDescriptorCheck) {
        this.disposed = true;
      }
      return r;
    }
  });
  if (es5PropertyDescriptorCheck) {
    objectDefinePropertyPolyfill(O, "disposed", {
      configurable: true,
      get: function () {
        return m(this).state === A;
      }
    });
  }
  definePropertyHelper_1_1(O, y, O.dispose, {
    name: "dispose"
  });
  definePropertyHelper_1_1(O, g, b, {
    nonWritable: true
  });
  polyfillPropertyDefiner({
    global: true,
    constructor: true
  }, {
    DisposableStack: S
  });
}