// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError'
// - Resolved require(434324) to 'require-object-or-throw-type-error'
// - Renamed variable 'i' to 'objectDefinePropertiesPolyfill'
// - Resolved require(182349) to 'object-define-properties-polyfill'
// - Renamed variable 'u' to 'objectPrototypeProperties'
// - Resolved require(809322) to 'object-prototype-properties'
// - Renamed variable 'c' to 'emptyModule_2'
// - Resolved require(422324) to 'empty-module_2'
// - Renamed variable 's' to 'getDocumentElementHelper'
// - Resolved require(749727) to 'get-document-element-helper'
// - Renamed variable 'f' to 'safeCreateElement'
// - Resolved require(803286) to 'safe-create-element'
// - Renamed variable 'a' to 'sharedSymbolKeyUtil'
// - Resolved require(893493) to 'shared-symbol-key-util'
// - Updated imported property 'f' to 'defineProperties' (module 182349)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 934258
         */
module.exports = function (module, exports, require) {
  var e;
  var requireObjectOrThrowTypeError = require("require-object-or-throw-type-error") /*id: 434324*/;
  var objectDefinePropertiesPolyfill = require("object-define-properties-polyfill") /*id: 182349*/;
  var objectPrototypeProperties = require("object-prototype-properties") /*id: 809322*/;
  var emptyModule_2 = require("empty-module_2") /*id: 422324*/;
  var getDocumentElementHelper = require("get-document-element-helper") /*id: 749727*/;
  var safeCreateElement = require("safe-create-element") /*id: 803286*/;
  var sharedSymbolKeyUtil = require("shared-symbol-key-util") /*id: 893493*/;
  var p = "prototype";
  var l = "script";
  var v = sharedSymbolKeyUtil("IE_PROTO");
  function y() {}
  function h(t) {
    return "<" + l + ">" + t + "</" + l + ">";
  }
  function b(t) {
    t.write(h(""));
    t.close();
    var r = t.parentWindow.Object;
    t = null;
    return r;
  }
  function d() {
    var t;
    var r = safeCreateElement("iframe");
    r.style.display = "none";
    getDocumentElementHelper.appendChild(r);
    r.src = String("java" + l + ":");
    (t = r.contentWindow.document).open();
    t.write(h("document.F=Object"));
    t.close();
    return t.F;
  }
  function g() {
    try {
      e = new ActiveXObject("htmlfile");
    } catch (t) {}
    g = typeof document != "undefined" ? document.domain && e ? b(e) : d() : b(e);
    for (var t = objectPrototypeProperties.length; t--;) {
      delete g[p][objectPrototypeProperties[t]];
    }
    return g();
  }
  emptyModule_2[v] = true;
  module.exports = Object.create || function (t, r) {
    var n;
    if (t !== null) {
      y[p] = requireObjectOrThrowTypeError(t);
      n = new y();
      y[p] = null;
      n[v] = t;
    } else {
      n = g();
    }
    if (r === undefined) {
      return n;
    } else {
      return objectDefinePropertiesPolyfill.defineProperties(n, r);
    }
  };
}