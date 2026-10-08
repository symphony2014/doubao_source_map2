// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'editorCommands'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 361547
         */
module.exports = function (module, exports, require) {
  var o;
  (o = {}).LogOut = "LogOut";
  o.ShowTemplate = "ShowTemplate";
  o.RefreshEditor = "RefreshEditor";
  o.LocateBlockWithRecordId = "LocateBlockWithRecordId";
  o.FreezeDefaultScroll = "FreezeDefaultScroll";
  o.GlobalCommentDidMount = "GlobalCommentDidMount";
  o.CopyAll = "CopyAll";
  o.PageEditable = "PageEditable";
  o.EditableChange = "EditableChange";
  o.OfflineApplyEnd = "OfflineApplyEnd";
  o.OfflineApplyError = "OfflineApplyError";
  o.WillCreateDoc = "WillCreateDoc";
  o.AllDataReady = "AllDataReady";
  let i = o;
  require.d(exports, {
    editorCommands: function () {
      return i;
    }
  });
}