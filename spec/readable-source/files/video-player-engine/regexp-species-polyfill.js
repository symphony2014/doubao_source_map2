// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(210018) to 'regexp-exec-polyfill-define'
// - Renamed variable 'Q' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'l' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'i' to 'regexpExecPolyfill'
// - Resolved require(477250) to 'regexp-exec-polyfill'
// - Renamed variable 'a' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'd' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'r' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 359702
         */
module.exports = function (module, exports, require) {
  require("regexp-exec-polyfill-define") /*id: 210018*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var regexpExecPolyfill = require("regexp-exec-polyfill") /*id: 477250*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var o = coreJsWksAccess("species");
  var B = RegExp.prototype;
  module.exports = function (U, n, F, R) {
    var c = coreJsWksAccess(U);
    var s = !tryCatchFunctionWrapper(function () {
      var n = {
        [c]: function () {
          return 7;
        }
      };
      return ""[U](n) !== 7;
    });
    var V = s && !tryCatchFunctionWrapper(function () {
      var n = false;
      var F = /a/;
      if (U === "split") {
        (F = {}).constructor = {};
        F.constructor[o] = function () {
          return F;
        };
        F.flags = "";
        F[c] = /./[c];
      }
      F.exec = function () {
        n = true;
        return null;
      };
      F[c]("");
      return !n;
    });
    if (!s || !V || F) {
      var Z = /./[c];
      var h = n(c, ""[U], function (U, n, F, l, a) {
        var d = n.exec;
        if (d === regexpExecPolyfill || d === B.exec) {
          if (s && !a) {
            return {
              done: true,
              value: callBindPolyfill(Z, n, F, l)
            };
          } else {
            return {
              done: true,
              value: callBindPolyfill(U, F, n, l)
            };
          }
        } else {
          return {
            done: false
          };
        }
      });
      definePropertyHelper_1_1(String.prototype, U, h[0]);
      definePropertyHelper_1_1(B, c, h[1]);
    }
    if (R) {
      definePropertyHelper_1(B[c], "sham", true);
    }
  };
}