// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'PositionModes'
// - Renamed export 'R' to 'RevisionStates'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 758057
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  (n = {}).posBySelection = "posBySelection";
  n.posByThirdParty = "posByThirdParty";
  n.posByDefault = "posByDefault";
  let l = n;
  (r = {}).added = "added";
  r.updated = "updated";
  r.deleted = "deleted";
  let s = r;
  require.d(exports, {
    PositionModes: function () {
      return l;
    },
    RevisionStates: function () {
      return s;
    }
  });
}