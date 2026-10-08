// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'i' to 'definePropertiesPolyfill'
// - Resolved require(991559) to 'define-properties-polyfill'
// - Renamed variable 'a' to 'objectPrototypeMethods'
// - Resolved require(9179) to 'object-prototype-methods'
// - Renamed variable 'u' to 'libPolyfill_1'
// - Resolved require(910663) to 'lib-polyfill_1'
// - Renamed variable 'c' to 'documentElementPolyfill'
// - Resolved require(571739) to 'document-element-polyfill'
// - Renamed variable 'f' to 'createElementPolyfill'
// - Resolved require(962506) to 'create-element-polyfill'
// - Renamed variable 's' to 'symbolDescriptionCache'
// - Resolved require(896189) to 'symbol-description-cache'
// - Updated imported property 'f' to 'defineProperties' (module 991559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 557677
         */
module.exports = function (module, exports, require) {
  var n;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var definePropertiesPolyfill = require("define-properties-polyfill") /*id: 991559*/;
  var objectPrototypeMethods = require("object-prototype-methods") /*id: 9179*/;
  var libPolyfill_1 = require("lib-polyfill_1") /*id: 910663*/;
  var documentElementPolyfill = require("document-element-polyfill") /*id: 571739*/;
  var createElementPolyfill = require("create-element-polyfill") /*id: 962506*/;
  var symbolDescriptionCache = require("symbol-description-cache") /*id: 896189*/;
  var l = "prototype";
  var v = "script";
  var p = symbolDescriptionCache("IE_PROTO");
  function h() {}
  function d(t) {
    return "<" + v + ">" + t + "</" + v + ">";
  }
  function y(t) {
    t.write(d(""));
    t.close();
    var r = t.parentWindow.Object;
    t = null;
    return r;
  }
  function g() {
    var t;
    var r = createElementPolyfill("iframe");
    r.style.display = "none";
    documentElementPolyfill.appendChild(r);
    r.src = String("java" + v + ":");
    (t = r.contentWindow.document).open();
    t.write(d("document.F=Object"));
    t.close();
    return t.F;
  }
  function b() {
    try {
      n = new ActiveXObject("htmlfile");
    } catch (t) {}
    b = typeof document != "undefined" ? document.domain && n ? y(n) : g() : y(n);
    for (var t = objectPrototypeMethods.length; t--;) {
      delete b[l][objectPrototypeMethods[t]];
    }
    return b();
  }
  libPolyfill_1[p] = true;
  module.exports = Object.create || function (t, r) {
    var e;
    if (t !== null) {
      h[l] = requireObjectOrThrowTypeError_1(t);
      e = new h();
      h[l] = null;
      e[p] = t;
    } else {
      e = b();
    }
    if (r === undefined) {
      return e;
    } else {
      return definePropertiesPolyfill.defineProperties(e, r);
    }
  };
}