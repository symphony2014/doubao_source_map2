// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'defineGlobalProperty_1'
// - Resolved require(433178) to 'define-global-property_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 53489
         */
module.exports = function (module, exports, require) {
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var defineGlobalProperty_1 = require("define-global-property_1") /*id: 433178*/;
  var a = "__core-js_shared__";
  var u = module.exports = globalObjectPolyfill[a] || defineGlobalProperty_1(a, {});
  (u.versions ||= []).push({
    version: "3.41.0",
    mode: libPolyfillCheck ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
}