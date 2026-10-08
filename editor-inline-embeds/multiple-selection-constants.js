// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'selectionEventTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 512848
         */
module.exports = function (module, exports, require) {
  var r;
  (r = {}).MULTIPLE_SELECTION_BEFOREINPUT = "multiple_selection_beforeinput";
  r.MULTIPLE_SELECTION_COMPOSITIONEND = "multiple_selection_compositionend";
  r.MULTIPLE_SELECTION_COMPOSITIONSTART = "MULTIPLE_SELECTION_COMPOSITIONSTART";
  r.MOBILE_CONTROL = "mobile_control";
  let o = r;
  require.d(exports, {
    selectionEventTypes: function () {
      return o;
    }
  });
}