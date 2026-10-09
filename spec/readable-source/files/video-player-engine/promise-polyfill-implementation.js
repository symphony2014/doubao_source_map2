// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'd' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'r' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 'o' to 'nodeEnvironmentCheck'
// - Resolved require(705753) to 'node-environment-check'
// - Renamed variable 'B' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'R' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'c' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 's' to 'setPrototypeOfPolyfill'
// - Resolved require(411942) to 'set-prototype-of-polyfill'
// - Renamed variable 'V' to 'setToStringTagUtil'
// - Resolved require(768336) to 'set-to-string-tag-util'
// - Renamed variable 'Z' to 'speciesAccessorPolyfill'
// - Resolved require(56192) to 'species-accessor-polyfill'
// - Renamed variable 'h' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'u' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'S' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'J' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 'm' to 'speciesConstructorUtil'
// - Resolved require(206077) to 'species-constructor-util'
// - Resolved require(264051) to 'set-immediate-polyfill'
// - Renamed variable 'W' to 'queueMicrotaskPolyfill'
// - Resolved require(745385) to 'queue-microtask-polyfill'
// - Renamed variable 'E' to 'libPolyfillStub'
// - Resolved require(880009) to 'lib-polyfill-stub'
// - Renamed variable 'k' to 'libPolyfillSafeCall'
// - Resolved require(281924) to 'lib-polyfill-safe-call'
// - Renamed variable 'N' to 'queuePolyfill'
// - Resolved require(227116) to 'queue-polyfill'
// - Renamed variable 'y' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'b' to 'promisePolyfill'
// - Resolved require(733703) to 'promise-polyfill'
// - Renamed variable 'f' to 'promisePolyfillDetection'
// - Resolved require(91037) to 'promise-polyfill-detection'
// - Renamed variable 'T' to 'promiseCapabilityPolyfill'
// - Resolved require(8840) to 'promise-capability-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 403190
         */
module.exports = function (module, exports, require) {
  var Q;
  var l;
  var i;
  var a;
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var nodeEnvironmentCheck = require("node-environment-check") /*id: 705753*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var setPrototypeOfPolyfill = require("set-prototype-of-polyfill") /*id: 411942*/;
  var setToStringTagUtil = require("set-to-string-tag-util") /*id: 768336*/;
  var speciesAccessorPolyfill = require("species-accessor-polyfill") /*id: 56192*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var speciesConstructorUtil = require("species-constructor-util") /*id: 206077*/;
  var p = require("set-immediate-polyfill") /*id: 264051*/.set;
  var queueMicrotaskPolyfill = require("queue-microtask-polyfill") /*id: 745385*/;
  var libPolyfillStub = require("lib-polyfill-stub") /*id: 880009*/;
  var libPolyfillSafeCall = require("lib-polyfill-safe-call") /*id: 281924*/;
  var queuePolyfill = require("queue-polyfill") /*id: 227116*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var promisePolyfill = require("promise-polyfill") /*id: 733703*/;
  var promisePolyfillDetection = require("promise-polyfill-detection") /*id: 91037*/;
  var promiseCapabilityPolyfill = require("promise-capability-polyfill") /*id: 8840*/;
  var v = "Promise";
  var C = promisePolyfillDetection.CONSTRUCTOR;
  var X = promisePolyfillDetection.REJECTION_EVENT;
  var L = promisePolyfillDetection.SUBCLASSING;
  var G = objectStateManager.getterFor(v);
  var g = objectStateManager.set;
  var D = promisePolyfill && promisePolyfill.prototype;
  var x = promisePolyfill;
  var I = D;
  var M = globalObjectPolyfill.TypeError;
  var Y = globalObjectPolyfill.document;
  var K = globalObjectPolyfill.process;
  var w = promiseCapabilityPolyfill.f;
  var H = w;
  var P = !!Y && !!Y.createEvent && !!globalObjectPolyfill.dispatchEvent;
  var j = "unhandledrejection";
  function z(U) {
    var n;
    return !!isObjectOrFunctionCheck(U) && !!isFunctionPolyfill(n = U.then) && n;
  }
  function O(U, n) {
    var F;
    var Q;
    var l;
    var i = n.value;
    var a = n.state === 1;
    var d = a ? U.ok : U.fail;
    var r = U.resolve;
    var o = U.reject;
    var B = U.domain;
    try {
      if (d) {
        if (!a) {
          if (n.rejection === 2) {
            ee(n);
          }
          n.rejection = 1;
        }
        if (d === true) {
          F = i;
        } else {
          if (B) {
            B.enter();
          }
          F = d(i);
          if (B) {
            B.exit();
            l = true;
          }
        }
        if (F === U.promise) {
          o(new M("Promise-chain cycle"));
        } else if (Q = z(F)) {
          callBindPolyfill(Q, F, r, o);
        } else {
          r(F);
        }
      } else {
        o(i);
      }
    } catch (U) {
      if (B && !l) {
        B.exit();
      }
      o(U);
    }
  }
  function _(U, n) {
    if (!U.notified) {
      U.notified = true;
      queueMicrotaskPolyfill(function () {
        var F;
        var Q = U.reactions;
        while (F = Q.get()) {
          O(F, U);
        }
        U.notified = false;
        if (n && !U.rejection) {
          q(U);
        }
      });
    }
  }
  function A(U, n, F) {
    var Q;
    var l;
    if (P) {
      (Q = Y.createEvent("Event")).promise = n;
      Q.reason = F;
      Q.initEvent(U, false, true);
      globalObjectPolyfill.dispatchEvent(Q);
    } else {
      Q = {
        promise: n,
        reason: F
      };
    }
    if (!X && (l = globalObjectPolyfill["on" + U])) {
      l(Q);
    } else if (U === j) {
      libPolyfillStub("Unhandled promise rejection", F);
    }
  }
  function q(U) {
    callBindPolyfill(p, globalObjectPolyfill, function () {
      var n;
      var F = U.facade;
      var Q = U.value;
      if ($(U) && (n = libPolyfillSafeCall(function () {
        if (nodeEnvironmentCheck) {
          K.emit("unhandledRejection", Q, F);
        } else {
          A(j, F, Q);
        }
      }), U.rejection = nodeEnvironmentCheck || $(U) ? 2 : 1, n.error)) {
        throw n.value;
      }
    });
  }
  function $(U) {
    return U.rejection !== 1 && !U.parent;
  }
  function ee(U) {
    callBindPolyfill(p, globalObjectPolyfill, function () {
      var n = U.facade;
      if (nodeEnvironmentCheck) {
        K.emit("rejectionHandled", n);
      } else {
        A("rejectionhandled", n, U.value);
      }
    });
  }
  function et(U, n, F) {
    return function (Q) {
      U(n, Q, F);
    };
  }
  function eU(U, n, F) {
    if (!U.done) {
      U.done = true;
      if (F) {
        U = F;
      }
      U.value = n;
      U.state = 2;
      _(U, true);
    }
  }
  function en(U, n, F) {
    if (!U.done) {
      U.done = true;
      if (F) {
        U = F;
      }
      try {
        if (U.facade === n) {
          throw new M("Promise can't be resolved itself");
        }
        var Q = z(n);
        if (Q) {
          queueMicrotaskPolyfill(function () {
            var F = {
              done: false
            };
            try {
              callBindPolyfill(Q, n, et(en, F, U), et(eU, F, U));
            } catch (n) {
              eU(F, n, U);
            }
          });
        } else {
          U.value = n;
          U.state = 1;
          _(U, false);
        }
      } catch (n) {
        eU({
          done: false
        }, n, U);
      }
    }
  }
  if (C && (I = (x = function (U) {
    validatePrototypeInvocation(this, I);
    functionValidator(U);
    callBindPolyfill(Q, this);
    var n = G(this);
    try {
      U(et(en, n), et(eU, n));
    } catch (U) {
      eU(n, U);
    }
  }).prototype, (Q = function (U) {
    g(this, {
      type: v,
      done: false,
      notified: false,
      parent: false,
      reactions: new queuePolyfill(),
      rejection: false,
      state: 0,
      value: null
    });
  }).prototype = definePropertyHelper_1_1(I, "then", function (U, n) {
    var F = G(this);
    var Q = w(speciesConstructorUtil(this, x));
    F.parent = true;
    Q.ok = !isFunctionPolyfill(U) || U;
    Q.fail = isFunctionPolyfill(n) && n;
    Q.domain = nodeEnvironmentCheck ? K.domain : undefined;
    if (F.state === 0) {
      F.reactions.add(Q);
    } else {
      queueMicrotaskPolyfill(function () {
        O(Q, F);
      });
    }
    return Q.promise;
  }), l = function () {
    var U = new Q();
    var n = G(U);
    this.promise = U;
    this.resolve = et(en, n);
    this.reject = et(eU, n);
  }, promiseCapabilityPolyfill.f = w = function (U) {
    if (U === x || U === i) {
      return new l(U);
    } else {
      return H(U);
    }
  }, !libPolyfillCheck && isFunctionPolyfill(promisePolyfill) && D !== Object.prototype)) {
    a = D.then;
    if (!L) {
      definePropertyHelper_1_1(D, "then", function (U, n) {
        var F = this;
        return new x(function (U, n) {
          callBindPolyfill(a, F, U, n);
        }).then(U, n);
      }, {
        unsafe: true
      });
    }
    try {
      delete D.constructor;
    } catch (U) {}
    if (setPrototypeOfPolyfill) {
      setPrototypeOfPolyfill(D, I);
    }
  }
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    wrap: true,
    forced: C
  }, {
    Promise: x
  });
  setToStringTagUtil(x, v, false, true);
  speciesAccessorPolyfill(v);
}