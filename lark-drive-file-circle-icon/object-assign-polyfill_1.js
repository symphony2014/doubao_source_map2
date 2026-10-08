// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Renamed variable 'a' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'c' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'i' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'o' to 'objectKeysPolyfill_2'
// - Resolved require(132591) to 'object-keys-polyfill_2'
// - Renamed variable 'l' to 'getOwnPropertySymbolsHelper'
// - Resolved require(599668) to 'get-own-property-symbols-helper'
// - Renamed variable 'f' to 'propertyIsEnumerablePolyfill'
// - Resolved require(25377) to 'property-is-enumerable-polyfill'
// - Renamed variable 's' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Renamed variable 'u' to 'stringToArrayOrObjectFallback'
// - Resolved require(280815) to 'string-to-array-or-object-fallback'
// - Updated imported property 'f' to 'getOwnPropertySymbols' (module 599668)
// - Updated imported property 'f' to 'isEnumerable' (module 25377)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 859939
         */
module.exports = function (module, exports, require) {
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var objectKeysPolyfill_2 = require("object-keys-polyfill_2") /*id: 132591*/;
  var getOwnPropertySymbolsHelper = require("get-own-property-symbols-helper") /*id: 599668*/;
  var propertyIsEnumerablePolyfill = require("property-is-enumerable-polyfill") /*id: 25377*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var stringToArrayOrObjectFallback = require("string-to-array-or-object-fallback") /*id: 280815*/;
  var h = Object.assign;
  var m = Object.defineProperty;
  var v = functionBindPrototypeCheckWrapper([].concat);
  module.exports = !h || safeFunctionExecutor(function () {
    if (checkPropertyDescriptorSupport && h({
      b: 1
    }, h(m({}, "a", {
      enumerable: true,
      get: function () {
        m(this, "b", {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) {
      return true;
    }
    var e = {};
    var t = {};
    var r = Symbol("assign detection");
    var a = "abcdefghijklmnopqrst";
    e[r] = 7;
    a.split("").forEach(function (e) {
      t[e] = e;
    });
    return h({}, e)[r] !== 7 || objectKeysPolyfill_2(h({}, t)).join("") !== a;
  }) ? function (e, t) {
    var r = toObjectUtil(e);
    var a = arguments.length;
    var i = 1;
    var h = getOwnPropertySymbolsHelper.getOwnPropertySymbols;
    var m = propertyIsEnumerablePolyfill.isEnumerable;
    while (a > i) {
      var p;
      var g = stringToArrayOrObjectFallback(arguments[i++]);
      var d = h ? v(objectKeysPolyfill_2(g), h(g)) : objectKeysPolyfill_2(g);
      var w = d.length;
      var E = 0;
      while (w > E) {
        p = d[E++];
        if (!checkPropertyDescriptorSupport || functionCallBindHelper(m, g, p)) {
          r[p] = g[p];
        }
      }
    }
    return r;
  } : h;
}