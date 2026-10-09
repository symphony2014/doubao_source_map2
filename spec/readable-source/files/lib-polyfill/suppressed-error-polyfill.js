// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 'a' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 'u' to 'setPrototypeOfPolyfill'
// - Resolved require(411942) to 'set-prototype-of-polyfill'
// - Renamed variable 'c' to 'objectDefaultsAssign'
// - Resolved require(210693) to 'object-defaults-assign'
// - Renamed variable 'f' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 's' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'l' to 'polyfillPropertyDescriptor'
// - Resolved require(790197) to 'polyfill-property-descriptor'
// - Renamed variable 'v' to 'captureStackTracePolyfill'
// - Resolved require(218156) to 'capture-stack-trace-polyfill'
// - Renamed variable 'p' to 'safeStringDefaultUtil'
// - Resolved require(560205) to 'safe-string-default-util'
// - Renamed variable 'h' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'd' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'y' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 710834
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var setPrototypeOfPolyfill = require("set-prototype-of-polyfill") /*id: 411942*/;
  var objectDefaultsAssign = require("object-defaults-assign") /*id: 210693*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var polyfillPropertyDescriptor = require("polyfill-property-descriptor") /*id: 790197*/;
  var captureStackTracePolyfill = require("capture-stack-trace-polyfill") /*id: 218156*/;
  var safeStringDefaultUtil = require("safe-string-default-util") /*id: 560205*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var g = globalObjectPolyfill.SuppressedError;
  var b = coreJsWksAccess("toStringTag");
  var w = Error;
  var m = !!g && g.length !== 3;
  var x = !!g && tryCatchFunctionWrapper(function () {
    return new g(1, 2, 3, {
      cause: 4
    }).cause === 4;
  });
  var A = m || x;
  function E(t, r, e) {
    var n;
    var o = isPrototypeOfPolyfill(S, this);
    if (setPrototypeOfPolyfill) {
      n = A && (!o || getPrototypeOfPolyfill_1(this) === S) ? new g() : setPrototypeOfPolyfill(new w(), o ? getPrototypeOfPolyfill_1(this) : S);
    } else {
      definePropertyHelper_1(n = o ? this : objectCreatePolyfill_1(S), b, "Error");
    }
    if (e !== undefined) {
      definePropertyHelper_1(n, "message", safeStringDefaultUtil(e));
    }
    captureStackTracePolyfill(n, E, n.stack, 1);
    definePropertyHelper_1(n, "error", t);
    definePropertyHelper_1(n, "suppressed", r);
    return n;
  }
  if (setPrototypeOfPolyfill) {
    setPrototypeOfPolyfill(E, w);
  } else {
    objectDefaultsAssign(E, w, {
      name: true
    });
  }
  var S = E.prototype = A ? g.prototype : objectCreatePolyfill_1(w.prototype, {
    constructor: polyfillPropertyDescriptor(1, E),
    message: polyfillPropertyDescriptor(1, ""),
    name: polyfillPropertyDescriptor(1, "SuppressedError")
  });
  if (A && !libPolyfillCheck) {
    S.constructor = E;
  }
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    arity: 3,
    forced: A
  }, {
    SuppressedError: E
  });
}