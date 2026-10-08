// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 'a' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'u' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'c' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 'f' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 's' to 'es5DefinePropertyPolyfill'
// - Resolved require(864373) to 'es5-define-property-polyfill'
// - Renamed variable 'l' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'v' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'p' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Resolved require(136661) to 'iterator-prototype-setup'
// - Renamed variable 'd' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'y' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 240915
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var es5DefinePropertyPolyfill = require("es5-define-property-polyfill") /*id: 864373*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var h = require("iterator-prototype-setup") /*id: 136661*/.IteratorPrototype;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var g = "constructor";
  var b = "Iterator";
  var w = coreJsWksAccess("toStringTag");
  var m = TypeError;
  var x = globalObjectPolyfill[b];
  var A = libPolyfillCheck || !isFunctionPolyfill(x) || x.prototype !== h || !tryCatchFunctionWrapper(function () {
    x({});
  });
  function E() {
    validatePrototypeInvocation(this, h);
    if (getPrototypeOfPolyfill_1(this) === h) {
      throw new m("Abstract class Iterator not directly constructable");
    }
  }
  function S(t, r) {
    if (es5PropertyDescriptorCheck) {
      objectDefinePropertyPolyfill(h, t, {
        configurable: true,
        get: function () {
          return r;
        },
        set: function (r) {
          requireObjectOrThrowTypeError_1(this);
          if (this === h) {
            throw new m("You can't redefine this property");
          }
          if (objectHasOwnPolyfill_1(this, t)) {
            this[t] = r;
          } else {
            es5DefinePropertyPolyfill(this, t, r);
          }
        }
      });
    } else {
      h[t] = r;
    }
  }
  if (!objectHasOwnPolyfill_1(h, w)) {
    S(w, b);
  }
  if (A || !objectHasOwnPolyfill_1(h, g) || h[g] === Object) {
    S(g, E);
  }
  E.prototype = h;
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    forced: A
  }, {
    Iterator: E
  });
}