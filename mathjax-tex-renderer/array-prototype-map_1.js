// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(966545) to 'array-prototype-map'
// - Renamed variable 'r' to 'prototypeMemberGetter'
// - Resolved require(450021) to 'prototype-member-getter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 597083
         */
module.exports = function (module, exports, require) {
  require("array-prototype-map") /*id: 966545*/;
  var prototypeMemberGetter = require("prototype-member-getter") /*id: 450021*/;
  module.exports = prototypeMemberGetter("Array", "map");
}