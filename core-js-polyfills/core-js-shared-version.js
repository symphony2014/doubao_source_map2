// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'constantTrueValue'
// - Resolved require(659937) to 'constant-true-value'
// - Renamed variable 'o' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'i' to 'defineGlobalProperty'
// - Resolved require(477052) to 'define-global-property'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 678932
         */
module.exports = function (module, exports, require) {
  var constantTrueValue = require("constant-true-value") /*id: 659937*/;
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var defineGlobalProperty = require("define-global-property") /*id: 477052*/;
  var u = "__core-js_shared__";
  var c = module.exports = getGlobalObject[u] || defineGlobalProperty(u, {});
  (c.versions ||= []).push({
    version: "3.39.0",
    mode: constantTrueValue ? "pure" : "global",
    copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
}