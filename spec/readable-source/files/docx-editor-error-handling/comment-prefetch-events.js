// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'commentEventConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 110220
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {}).prefetchInitData = "prefetch_init_data";
  n.prefetchInitDataErr = "prefetch_init_data_error";
  n.commentModuleStart = "page_mount";
  n.pageLeave = "page_leave";
  n.docCommentMounted = "doc_comment_mounted";
  n.globalcommentLoaded = "globalcomment_loaded";
  n.commentableChange = "commentable_change";
  n.connectorLoadStart = "start";
  n.connectorLoadMatchDefault = "match_default";
  n.connectorLoadDeps = "load_deps_done";
  n.connectorLoadModule = "load_module_done";
  n.connectorLoadGetSdkDone = "get_sdk_done";
  n.connectorLoadError = "error";
  n.connectorLoadNewModuleError = "ready_error";
  n.connectorLoadReady = "ready";
  n.commentDataReady = "comment_data_ready";
  let o = n;
  require.d(exports, {
    commentEventConstants: function () {
      return o;
    }
  });
}