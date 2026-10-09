// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'a' to 'speciesAccessorPolyfill'
// - Resolved require(56192) to 'species-accessor-polyfill'
// - Renamed variable 'u' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'c' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'f' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 's' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'l' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'v' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'p' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'h' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'd' to 'definePropertiesHelper'
// - Resolved require(581987) to 'define-properties-helper'
// - Renamed variable 'y' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'g' to 'libPolyfillStub'
// - Resolved require(880009) to 'lib-polyfill-stub'
// - Renamed variable 'b' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'w' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 927041
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var speciesAccessorPolyfill = require("species-accessor-polyfill") /*id: 56192*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var definePropertiesHelper = require("define-properties-helper") /*id: 581987*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var libPolyfillStub = require("lib-polyfill-stub") /*id: 880009*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var m = coreJsWksAccess("observable");
  var x = "Observable";
  var A = "Subscription";
  var E = "SubscriptionObserver";
  var S = objectStateManager.getterFor;
  var O = objectStateManager.set;
  var R = S(x);
  var I = S(A);
  var T = S(E);
  function k(t) {
    this.observer = requireObjectOrThrowTypeError_1(t);
    this.cleanup = null;
    this.subscriptionObserver = null;
  }
  k.prototype = {
    type: A,
    clean: function () {
      var t = this.cleanup;
      if (t) {
        this.cleanup = null;
        try {
          t();
        } catch (t) {
          libPolyfillStub(t);
        }
      }
    },
    close: function () {
      if (!es5PropertyDescriptorCheck) {
        var t = this.facade;
        var r = this.subscriptionObserver;
        t.closed = true;
        if (r) {
          r.closed = true;
        }
      }
      this.observer = null;
    },
    isClosed: function () {
      return this.observer === null;
    }
  };
  function M(t, r) {
    var e;
    var n = O(this, new k(t));
    if (!es5PropertyDescriptorCheck) {
      this.closed = false;
    }
    try {
      if (e = safePropertyValidator(t, "start")) {
        callBindPolyfill(e, t, this);
      }
    } catch (t) {
      libPolyfillStub(t);
    }
    if (!n.isClosed()) {
      var a = n.subscriptionObserver = new j(n);
      try {
        var c = r(a);
        if (!isNullishCheck_1(c)) {
          n.cleanup = isFunctionPolyfill(c.unsubscribe) ? function () {
            c.unsubscribe();
          } : functionValidator(c);
        }
      } catch (t) {
        a.error(t);
        return;
      }
      if (n.isClosed()) {
        n.clean();
      }
    }
  }
  M.prototype = definePropertiesHelper({}, {
    unsubscribe: function () {
      var t = I(this);
      if (!t.isClosed()) {
        t.close();
        t.clean();
      }
    }
  });
  if (es5PropertyDescriptorCheck) {
    objectDefinePropertyPolyfill(M.prototype, "closed", {
      configurable: true,
      get: function () {
        return I(this).isClosed();
      }
    });
  }
  function j(t) {
    O(this, {
      type: E,
      subscriptionState: t
    });
    if (!es5PropertyDescriptorCheck) {
      this.closed = false;
    }
  }
  j.prototype = definePropertiesHelper({}, {
    next: function (t) {
      var r = T(this).subscriptionState;
      if (!r.isClosed()) {
        var e = r.observer;
        try {
          var n = safePropertyValidator(e, "next");
          if (n) {
            callBindPolyfill(n, e, t);
          }
        } catch (t) {
          libPolyfillStub(t);
        }
      }
    },
    error: function (t) {
      var r = T(this).subscriptionState;
      if (!r.isClosed()) {
        var e = r.observer;
        r.close();
        try {
          var n = safePropertyValidator(e, "error");
          if (n) {
            callBindPolyfill(n, e, t);
          } else {
            libPolyfillStub(t);
          }
        } catch (t) {
          libPolyfillStub(t);
        }
        r.clean();
      }
    },
    complete: function () {
      var t = T(this).subscriptionState;
      if (!t.isClosed()) {
        var r = t.observer;
        t.close();
        try {
          var e = safePropertyValidator(r, "complete");
          if (e) {
            callBindPolyfill(e, r);
          }
        } catch (t) {
          libPolyfillStub(t);
        }
        t.clean();
      }
    }
  });
  if (es5PropertyDescriptorCheck) {
    objectDefinePropertyPolyfill(j.prototype, "closed", {
      configurable: true,
      get: function () {
        return T(this).subscriptionState.isClosed();
      }
    });
  }
  function D(t) {
    validatePrototypeInvocation(this, P);
    O(this, {
      type: x,
      subscriber: functionValidator(t)
    });
  }
  var P = D.prototype;
  definePropertiesHelper(P, {
    subscribe: function (t) {
      var r = arguments.length;
      return new M(isFunctionPolyfill(t) ? {
        next: t,
        error: r > 1 ? arguments[1] : undefined,
        complete: r > 2 ? arguments[2] : undefined
      } : isObjectOrFunctionCheck(t) ? t : {}, R(this).subscriber);
    }
  });
  definePropertyHelper_1_1(P, m, function () {
    return this;
  });
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    forced: true
  }, {
    Observable: D
  });
  speciesAccessorPolyfill(x);
}