// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'EventTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 887808
         */
module.exports = function (module, exports, require) {
  var r;
  (r = {}).MENTION_ADD = "mention_add";
  r.MENTION_DELETE = "mention-delete";
  r.NEW_TITLE_UPDATE = "new_title_update";
  r.ICON_INFO_UPDATE = "icon_info_update";
  let o = r;
  require.d(exports, {
    EventTypes: function () {
      return o;
    }
  });
}