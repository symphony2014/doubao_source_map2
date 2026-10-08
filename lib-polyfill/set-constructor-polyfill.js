// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'setPrototypeUtils'
// - Resolved require(192672) to 'set-prototype-utils'
// - Renamed variable 'o' to 'setFindPolyfillUtil'
// - Resolved require(581853) to 'set-find-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 292078
         */
module.exports = function (module, exports, require) {
  var setPrototypeUtils = require("set-prototype-utils") /*id: 192672*/;
  var setFindPolyfillUtil = require("set-find-polyfill-util") /*id: 581853*/;
  var i = setPrototypeUtils.Set;
  var a = setPrototypeUtils.add;
  module.exports = function (t) {
    var r = new i();
    setFindPolyfillUtil(t, function (t) {
      a(r, t);
    });
    return r;
  };
}