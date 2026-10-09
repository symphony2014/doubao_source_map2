// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(998259) to 'array-push-polyfill'
// - Renamed variable 'r' to 'prototypeMemberGetter'
// - Resolved require(450021) to 'prototype-member-getter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 59882
         */
module.exports = function (module, exports, require) {
  require("array-push-polyfill") /*id: 998259*/;
  var prototypeMemberGetter = require("prototype-member-getter") /*id: 450021*/;
  module.exports = prototypeMemberGetter("Array", "push");
}