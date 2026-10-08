// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'TK' to 'docSectionTypes'
// - Renamed export 'WR' to 'defaultWikiTitle'
// - Renamed export 'Xw' to 'docFieldKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 260128
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  (r = {}).docInfo = "doc_info";
  r.options = "options";
  r.editors = "editors";
  r.deletedEditors = "deleted_editors";
  r.option_modified = "option_modified";
  let l = r;
  let s = t("common.unnamed_wiki");
  (o = {}).COVER = "COVER";
  o.AI_SUMMARY = "AI_SUMMARY";
  o.ADD_CUSTOM_ICON = "ADD_CUSTOM_ICON";
  o.DOC_INFO = "DOC_INFO";
  let a = o;
  require.d(exports, {
    docSectionTypes: function () {
      return a;
    },
    defaultWikiTitle: function () {
      return s;
    },
    docFieldKeys: function () {
      return l;
    }
  });
}