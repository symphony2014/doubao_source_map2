// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'a' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'u' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'c' to 'regexpFlagsGenerator'
// - Resolved require(685568) to 'regexp-flags-generator'
// - Renamed variable 'f' to 'regexpPolyfillDetect'
// - Resolved require(764642) to 'regexp-polyfill-detect'
// - Renamed variable 's' to 'coreJsSharedStoreAccess'
// - Resolved require(16765) to 'core-js-shared-store-access'
// - Renamed variable 'l' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'p' to 'regexpDotallPolyfillCheck'
// - Resolved require(9447) to 'regexp-dotall-polyfill-check'
// - Renamed variable 'h' to 'regexpNamedCaptureDetect'
// - Resolved require(956631) to 'regexp-named-capture-detect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 477250
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var regexpFlagsGenerator = require("regexp-flags-generator") /*id: 685568*/;
  var regexpPolyfillDetect = require("regexp-polyfill-detect") /*id: 764642*/;
  var coreJsSharedStoreAccess = require("core-js-shared-store-access") /*id: 16765*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var v = require("object-state-manager") /*id: 488732*/.get;
  var regexpDotallPolyfillCheck = require("regexp-dotall-polyfill-check") /*id: 9447*/;
  var regexpNamedCaptureDetect = require("regexp-named-capture-detect") /*id: 956631*/;
  var d = coreJsSharedStoreAccess("native-string-replace", String.prototype.replace);
  var y = RegExp.prototype.exec;
  var g = y;
  var b = functionBindFallback("".charAt);
  var w = functionBindFallback("".indexOf);
  var m = functionBindFallback("".replace);
  var x = functionBindFallback("".slice);
  o = /b*/g;
  callBindPolyfill(y, n = /a/, "a");
  callBindPolyfill(y, o, "a");
  var A = n.lastIndex !== 0 || o.lastIndex !== 0;
  var E = regexpPolyfillDetect.BROKEN_CARET;
  var S = /()??/.exec("")[1] !== undefined;
  if (A || S || E || regexpDotallPolyfillCheck || regexpNamedCaptureDetect) {
    g = function (t) {
      var r;
      var e;
      var n;
      var o;
      var a;
      var f;
      var s;
      var p = v(this);
      var h = symbolToStringConverter_1(t);
      var O = p.raw;
      if (O) {
        O.lastIndex = this.lastIndex;
        r = callBindPolyfill(g, O, h);
        this.lastIndex = O.lastIndex;
        return r;
      }
      var R = p.groups;
      var I = E && this.sticky;
      var T = callBindPolyfill(regexpFlagsGenerator, this);
      var k = this.source;
      var M = 0;
      var j = h;
      if (I) {
        if (w(T = m(T, "y", ""), "g") === -1) {
          T += "g";
        }
        j = x(h, this.lastIndex);
        if (this.lastIndex > 0 && (!this.multiline || this.multiline && b(h, this.lastIndex - 1) !== "\n")) {
          k = "(?: " + k + ")";
          j = " " + j;
          M++;
        }
        e = RegExp("^(?:" + k + ")", T);
      }
      if (S) {
        e = RegExp("^" + k + "$(?!\\s)", T);
      }
      if (A) {
        n = this.lastIndex;
      }
      o = callBindPolyfill(y, I ? e : this, j);
      if (I) {
        if (o) {
          o.input = x(o.input, M);
          o[0] = x(o[0], M);
          o.index = this.lastIndex;
          this.lastIndex += o[0].length;
        } else {
          this.lastIndex = 0;
        }
      } else if (A && o) {
        this.lastIndex = this.global ? o.index + o[0].length : n;
      }
      if (S && o && o.length > 1) {
        callBindPolyfill(d, o[0], e, function () {
          for (a = 1; a < arguments.length - 2; a++) {
            if (arguments[a] === undefined) {
              o[a] = undefined;
            }
          }
        });
      }
      if (o && R) {
        a = 0;
        o.groups = f = objectCreatePolyfill_1(null);
        for (; a < R.length; a++) {
          f[(s = R[a])[0]] = o[s[1]];
        }
      }
      return o;
    };
  }
  module.exports = g;
}