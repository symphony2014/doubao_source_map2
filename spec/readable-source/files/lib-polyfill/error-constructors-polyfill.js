// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'a' to 'errorPolyfillWrapper'
// - Resolved require(498357) to 'error-polyfill-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 990432
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var errorPolyfillWrapper = require("error-polyfill-wrapper") /*id: 498357*/;
  var u = "WebAssembly";
  var c = globalObjectPolyfill[u];
  var f = Error("e", {
    cause: 7
  }).cause !== 7;
  function s(t, r) {
    var e = {};
    e[t] = errorPolyfillWrapper(t, r, f);
    polyfillPropertyDefiner({
      global: true,
      constructor: true,
      arity: 1,
      forced: f
    }, e);
  }
  function l(t, r) {
    if (c && c[t]) {
      var e = {};
      e[t] = errorPolyfillWrapper(u + "." + t, r, f);
      polyfillPropertyDefiner({
        target: u,
        stat: true,
        constructor: true,
        arity: 1,
        forced: f
      }, e);
    }
  }
  s("Error", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
  s("EvalError", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
  s("RangeError", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
  s("ReferenceError", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
  s("SyntaxError", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
  s("TypeError", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
  s("URIError", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
  l("CompileError", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
  l("LinkError", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
  l("RuntimeError", function (t) {
    return function (r) {
      return reflectApplyPolyfill_1(t, this, arguments);
    };
  });
}