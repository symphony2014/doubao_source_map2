// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CZ' to 'pageTypes'
// - Renamed export 'GP' to 'newDocRoute'
// - Renamed export 'qk' to 'mockConversationId'
// - Renamed export 'rk' to 'writeRoute'
// - Renamed export 'zn' to 'mockArtifactId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-conversation-page-launcher.94db7428.js
         * chunkId: 20011
         * moduleId: 130052
         */
module.exports = function (module, exports, require) {
  var n;
  let o = "/chat/write";
  let r = "/chat/new-doc";
  let a = "new_doc_mock_conversation_id";
  let s = "new_doc_mock_artifact_id";
  (n = {}).AI_SPACE = "ai_space_my_folder";
  n.WRITING_DETAIL = "writing_detailpage";
  n.PC_NEW_TAB = "pc_new_tab";
  let l = n;
  require.d(exports, {
    pageTypes: function () {
      return l;
    },
    newDocRoute: function () {
      return r;
    },
    mockConversationId: function () {
      return a;
    },
    writeRoute: function () {
      return o;
    },
    mockArtifactId: function () {
      return s;
    }
  });
}