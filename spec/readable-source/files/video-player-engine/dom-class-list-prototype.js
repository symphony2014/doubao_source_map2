// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(962506) to 'create-element-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 543231
         */
module.exports = function (module, exports, require) {
  var Q = require("create-element-polyfill") /*id: 962506*/("span").classList;
  var l = Q && Q.constructor && Q.constructor.prototype;
  module.exports = l === Object.prototype ? undefined : l;
}