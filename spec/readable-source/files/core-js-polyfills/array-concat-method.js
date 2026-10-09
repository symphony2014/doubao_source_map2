// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(347928) to 'array-concat-polyfill_1'
// - Renamed variable 'e' to 'prototypeMemberGetter'
// - Resolved require(450021) to 'prototype-member-getter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 371994
         */
module.exports = function (module, exports, require) {
  require("array-concat-polyfill_1") /*id: 347928*/;
  var prototypeMemberGetter = require("prototype-member-getter") /*id: 450021*/;
  module.exports = prototypeMemberGetter("Array", "concat");
}