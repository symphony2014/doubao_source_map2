// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(760568) to 'core-js-export-util'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Resolved require(934258) to 'object-create-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 236623
         */
module.exports = function (module, exports, require) {
  require("core-js-export-util") /*id: 760568*/({
    target: "Object",
    stat: true,
    sham: !require("check-property-descriptor-support") /*id: 618813*/
  }, {
    create: require("object-create-polyfill") /*id: 934258*/
  });
}