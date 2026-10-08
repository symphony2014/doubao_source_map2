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
// - Renamed variable 'h' to 'chromeV8VersionPolyfill'
// - Resolved require(45469) to 'chrome-v8-version-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 479319
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
  var chromeV8VersionPolyfill = require("chrome-v8-version-polyfill") /*id: 45469*/;
  var d = globalPolyfillAccess("Promise");
  var y = globalPolyfillAccess("SuppressedError");
  var g = ReferenceError;
  var b = coreJsWksAccess("asyncDispose");
  var w = coreJsWksAccess("toStringTag");
  var m = "AsyncDisposableStack";
  var x = objectStateManager.set;
  var A = objectStateManager.getterFor(m);
  var E = "async-dispose";
  var S = "disposed";
  function O(t) {
    var r = A(t);
    if (r.state === S) {
      throw new g(m + " already disposed");
    }
    return r;
  }
  function R() {
    x(validatePrototypeInvocation(this, I), {
      type: m,
      state: "pending",
      stack: []
    });
    if (!es5PropertyDescriptorCheck) {
      this.disposed = false;
    }
  }
  var I = R.prototype;
  definePropertiesHelper(I, {
    disposeAsync: function () {
      var t = this;
      return new d(function (r, e) {
        var n;
        var i = A(t);
        if (i.state === S) {
          return r(undefined);
        }
        i.state = S;
        if (!es5PropertyDescriptorCheck) {
          t.disposed = true;
        }
        var a = i.stack;
        var u = a.length;
        var c = false;
        function f(t) {
          if (c) {
            n = new y(t, n);
          } else {
            c = true;
            n = t;
          }
          s();
        }
        function s() {
          if (u) {
            var t = a[--u];
            a[u] = null;
            try {
              d.resolve(t()).then(s, f);
            } catch (t) {
              f(t);
            }
          } else {
            i.stack = null;
            if (c) {
              e(n);
            } else {
              r(undefined);
            }
          }
        }
        s();
      });
    },
    use: function (t) {
      asyncDisposeUtil(O(this), t, E);
      return t;
    },
    adopt: function (t, r) {
      var e = O(this);
      functionValidator(r);
      asyncDisposeUtil(e, undefined, E, function () {
        return r(t);
      });
      return t;
    },
    defer: function (t) {
      var r = O(this);
      functionValidator(t);
      asyncDisposeUtil(r, undefined, E, t);
    },
    move: function () {
      var t = O(this);
      var r = new R();
      A(r).stack = t.stack;
      t.stack = [];
      t.state = S;
      if (!es5PropertyDescriptorCheck) {
        this.disposed = true;
      }
      return r;
    }
  });
  if (es5PropertyDescriptorCheck) {
    objectDefinePropertyPolyfill(I, "disposed", {
      configurable: true,
      get: function () {
        return A(this).state === S;
      }
    });
  }
  definePropertyHelper_1_1(I, b, I.disposeAsync, {
    name: "disposeAsync"
  });
  definePropertyHelper_1_1(I, w, m, {
    nonWritable: true
  });
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    forced: chromeV8VersionPolyfill && chromeV8VersionPolyfill < 136
  }, {
    AsyncDisposableStack: R
  });
}