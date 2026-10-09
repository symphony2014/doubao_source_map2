// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(214799) to 'array-foreach-polyfill_1_1'
// - Renamed variable 'e' to 'prototypeMemberGetter'
// - Resolved require(450021) to 'prototype-member-getter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 570140
         */
module.exports = function (module, exports, require) {
  require("array-foreach-polyfill_1_1") /*id: 214799*/;
  var prototypeMemberGetter = require("prototype-member-getter") /*id: 450021*/;
  module.exports = prototypeMemberGetter("Array", "forEach");
}