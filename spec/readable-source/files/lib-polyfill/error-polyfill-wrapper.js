// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'i' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'a' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 'u' to 'setPrototypeOfPolyfill'
// - Resolved require(411942) to 'set-prototype-of-polyfill'
// - Renamed variable 'c' to 'objectDefaultsAssign'
// - Resolved require(210693) to 'object-defaults-assign'
// - Renamed variable 'f' to 'definePropertyProxy'
// - Resolved require(868602) to 'define-property-proxy'
// - Renamed variable 's' to 'setPrototypeOfPolyfill_1'
// - Resolved require(579783) to 'set-prototype-of-polyfill_1'
// - Renamed variable 'l' to 'safeStringDefaultUtil'
// - Resolved require(560205) to 'safe-string-default-util'
// - Renamed variable 'v' to 'copyErrorCauseUtil'
// - Resolved require(487958) to 'copy-error-cause-util'
// - Renamed variable 'p' to 'captureStackTracePolyfill'
// - Resolved require(218156) to 'capture-stack-trace-polyfill'
// - Renamed variable 'h' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'd' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 498357
         */
module.exports = function (module, exports, require) {
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var setPrototypeOfPolyfill = require("set-prototype-of-polyfill") /*id: 411942*/;
  var objectDefaultsAssign = require("object-defaults-assign") /*id: 210693*/;
  var definePropertyProxy = require("define-property-proxy") /*id: 868602*/;
  var setPrototypeOfPolyfill_1 = require("set-prototype-of-polyfill_1") /*id: 579783*/;
  var safeStringDefaultUtil = require("safe-string-default-util") /*id: 560205*/;
  var copyErrorCauseUtil = require("copy-error-cause-util") /*id: 487958*/;
  var captureStackTracePolyfill = require("capture-stack-trace-polyfill") /*id: 218156*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  module.exports = function (t, r, e, y) {
    var g = "stackTraceLimit";
    var b = y ? 2 : 1;
    var w = t.split(".");
    var m = w[w.length - 1];
    var x = globalPolyfillAccess.apply(null, w);
    if (x) {
      var A = x.prototype;
      if (!libPolyfillCheck && objectHasOwnPolyfill_1(A, "cause")) {
        delete A.cause;
      }
      if (!e) {
        return x;
      }
      var E = globalPolyfillAccess("Error");
      var S = r(function (t, r) {
        var e = safeStringDefaultUtil(y ? r : t, undefined);
        var n = y ? new x(t) : new x();
        if (e !== undefined) {
          definePropertyHelper_1(n, "message", e);
        }
        captureStackTracePolyfill(n, S, n.stack, 2);
        if (this && isPrototypeOfPolyfill(A, this)) {
          setPrototypeOfPolyfill_1(n, this, S);
        }
        if (arguments.length > b) {
          copyErrorCauseUtil(n, arguments[b]);
        }
        return n;
      });
      S.prototype = A;
      if (m !== "Error") {
        if (setPrototypeOfPolyfill) {
          setPrototypeOfPolyfill(S, E);
        } else {
          objectDefaultsAssign(S, E, {
            name: true
          });
        }
      } else if (es5PropertyDescriptorCheck && g in x) {
        definePropertyProxy(S, x, g);
        definePropertyProxy(S, x, "prepareStackTrace");
      }
      objectDefaultsAssign(S, x);
      if (!libPolyfillCheck) {
        try {
          if (A.name !== m) {
            definePropertyHelper_1(A, "name", m);
          }
          A.constructor = S;
        } catch (t) {}
      }
      return S;
    }
  };
}