// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Au' to 'isContentDelta'
// - Renamed export 'Rm' to 'isDeltaSet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46252.e1de9c24.js
         * chunkId: 46252
         * moduleId: 914545
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var contentDeltaClass_1 = require("content-delta-class_1") /*id: 564245*/;
  var deltaPatchOperations = require("delta-patch-operations") /*id: 713456*/;
  let s = t => t instanceof contentDeltaClass_1.ContentDelta || objectPathGetDefault.getObjectPathDefault(t, ["constructor", "name"]) === "ZoneDelta";
  let a = t => t instanceof deltaPatchOperations.DeltaSet || objectPathGetDefault.getObjectPathDefault(t, ["constructor", "name"]) === "DeltaSet";
  require.d(exports, {
    isContentDelta: function () {
      return s;
    },
    isDeltaSet: function () {
      return a;
    }
  });
}