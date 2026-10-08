// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'symbolPolyfillDomSetupModule'
// - Resolved require(772038) to 'symbol-polyfill-dom-setup-module'
// - Renamed variable 'T' to 'webidlIteratorPolyfillReexport_2'
// - Resolved require(429548) to 'webidl-iterator-polyfill-reexport_2'
// - Renamed variable 'n' to 'aiPptTemplateSelectorProxy'
// - Resolved require(486122) to 'ai-ppt-template-selector-proxy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 396366
         */
module.exports = function (module, exports, require) {
  var symbolPolyfillDomSetupModule = require("symbol-polyfill-dom-setup-module") /*id: 772038*/;
  var webidlIteratorPolyfillReexport_2 = require("webidl-iterator-polyfill-reexport_2") /*id: 429548*/;
  var aiPptTemplateSelectorProxy = require("ai-ppt-template-selector-proxy") /*id: 486122*/;
  module.exports = function (t, e) {
    var Q = t == null ? null : symbolPolyfillDomSetupModule !== undefined && webidlIteratorPolyfillReexport_2(t) || t["@@iterator"];
    if (Q != null) {
      var o;
      var i;
      var a;
      var u;
      var s = [];
      var l = true;
      var c = false;
      try {
        a = (Q = Q.call(t)).next;
        if (e === 0) {
          if (Object(Q) !== Q) {
            return;
          }
          l = false;
        } else {
          for (; !(l = (o = a.call(Q)).done) && (aiPptTemplateSelectorProxy(s).call(s, o.value), s.length !== e); l = true);
        }
      } catch (t) {
        c = true;
        i = t;
      } finally {
        try {
          if (!l && Q.return != null && (u = Q.return(), Object(u) !== u)) {
            return;
          }
        } finally {
          if (c) {
            throw i;
          }
        }
      }
      return s;
    }
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}