// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 'i' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 'a' to 'setPrototypeOfPolyfill'
// - Resolved require(411942) to 'set-prototype-of-polyfill'
// - Renamed variable 'u' to 'objectDefaultsAssign'
// - Resolved require(210693) to 'object-defaults-assign'
// - Renamed variable 'c' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 'f' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 's' to 'polyfillPropertyDescriptor'
// - Resolved require(790197) to 'polyfill-property-descriptor'
// - Renamed variable 'l' to 'copyErrorCauseUtil'
// - Resolved require(487958) to 'copy-error-cause-util'
// - Renamed variable 'v' to 'captureStackTracePolyfill'
// - Resolved require(218156) to 'capture-stack-trace-polyfill'
// - Renamed variable 'p' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 'h' to 'safeStringDefaultUtil'
// - Resolved require(560205) to 'safe-string-default-util'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 89279
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var setPrototypeOfPolyfill = require("set-prototype-of-polyfill") /*id: 411942*/;
  var objectDefaultsAssign = require("object-defaults-assign") /*id: 210693*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var polyfillPropertyDescriptor = require("polyfill-property-descriptor") /*id: 790197*/;
  var copyErrorCauseUtil = require("copy-error-cause-util") /*id: 487958*/;
  var captureStackTracePolyfill = require("capture-stack-trace-polyfill") /*id: 218156*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var safeStringDefaultUtil = require("safe-string-default-util") /*id: 560205*/;
  var d = require("core-js-wks-access") /*id: 349338*/("toStringTag");
  var y = Error;
  var g = [].push;
  function b(t, r) {
    var e;
    var n = isPrototypeOfPolyfill(w, this);
    if (setPrototypeOfPolyfill) {
      e = setPrototypeOfPolyfill(new y(), n ? getPrototypeOfPolyfill_1(this) : w);
    } else {
      definePropertyHelper_1(e = n ? this : objectCreatePolyfill_1(w), d, "Error");
    }
    if (r !== undefined) {
      definePropertyHelper_1(e, "message", safeStringDefaultUtil(r));
    }
    captureStackTracePolyfill(e, b, e.stack, 1);
    if (arguments.length > 2) {
      copyErrorCauseUtil(e, arguments[2]);
    }
    var u = [];
    iteratorForEachHelper(t, g, {
      that: u
    });
    definePropertyHelper_1(e, "errors", u);
    return e;
  }
  if (setPrototypeOfPolyfill) {
    setPrototypeOfPolyfill(b, y);
  } else {
    objectDefaultsAssign(b, y, {
      name: true
    });
  }
  var w = b.prototype = objectCreatePolyfill_1(y.prototype, {
    constructor: polyfillPropertyDescriptor(1, b),
    message: polyfillPropertyDescriptor(1, ""),
    name: polyfillPropertyDescriptor(1, "AggregateError")
  });
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    arity: 2
  }, {
    AggregateError: b
  });
}