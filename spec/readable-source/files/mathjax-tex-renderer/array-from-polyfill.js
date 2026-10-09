// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'functionBindHelper_1'
// - Resolved require(644734) to 'function-bind-helper_1'
// - Renamed variable 'T' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'n' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Renamed variable 'o' to 'iteratorCloseErrorHandler'
// - Resolved require(995722) to 'iterator-close-error-handler'
// - Renamed variable 'i' to 'arrayTypeChecker'
// - Resolved require(182968) to 'array-type-checker'
// - Renamed variable 'a' to 'functionConstructorCheck'
// - Resolved require(275428) to 'function-constructor-check'
// - Renamed variable 'u' to 'clampLengthToSafe'
// - Resolved require(420882) to 'clamp-length-to-safe'
// - Renamed variable 's' to 'safeDefineProperty'
// - Resolved require(665456) to 'safe-define-property'
// - Renamed variable 'l' to 'iterableAssertionHelper'
// - Resolved require(989372) to 'iterable-assertion-helper'
// - Renamed variable 'c' to 'iteratorGetterUtil'
// - Resolved require(593407) to 'iterator-getter-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 123370
         */
module.exports = function (module, exports, require) {
  var functionBindHelper_1 = require("function-bind-helper_1") /*id: 644734*/;
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var iteratorCloseErrorHandler = require("iterator-close-error-handler") /*id: 995722*/;
  var arrayTypeChecker = require("array-type-checker") /*id: 182968*/;
  var functionConstructorCheck = require("function-constructor-check") /*id: 275428*/;
  var clampLengthToSafe = require("clamp-length-to-safe") /*id: 420882*/;
  var safeDefineProperty = require("safe-define-property") /*id: 665456*/;
  var iterableAssertionHelper = require("iterable-assertion-helper") /*id: 989372*/;
  var iteratorGetterUtil = require("iterator-getter-util") /*id: 593407*/;
  var p = Array;
  module.exports = function (t) {
    var e;
    var Q;
    var h;
    var f;
    var d;
    var D;
    var L = toObjectUtil(t);
    var m = functionConstructorCheck(this);
    var y = arguments.length;
    var H = y > 1 ? arguments[1] : undefined;
    var v = H !== undefined;
    if (v) {
      H = functionBindHelper_1(H, y > 2 ? arguments[2] : undefined);
    }
    var g = iteratorGetterUtil(L);
    var b = 0;
    if (g && (this !== p || !arrayTypeChecker(g))) {
      Q = m ? new this() : [];
      d = (f = iterableAssertionHelper(L, g)).next;
      for (; !(h = functionCallBindHelper(d, f)).done; b++) {
        D = v ? iteratorCloseErrorHandler(f, H, [h.value, b], true) : h.value;
        safeDefineProperty(Q, b, D);
      }
    } else {
      e = clampLengthToSafe(L);
      Q = m ? new this(e) : p(e);
      for (; e > b; b++) {
        D = v ? H(L[b], b) : L[b];
        safeDefineProperty(Q, b, D);
      }
    }
    Q.length = b;
    return Q;
  };
}