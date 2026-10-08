// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'shouldExpandChatCanvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 823556
         */
module.exports = function (module, exports, require) {
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var docxPermissionHook = require("docx-permission-hook") /*id: 42326*/;
  function a(e) {
    let {
      isDoubaoDoc: t = true
    } = e ?? {};
    let n = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand);
    let a = writingSkillStore.writingSkillStore(e => {
      let {
        openedDocId: t,
        docMetaMap: n
      } = e;
      return t && pathArrayValidation.validatePathArray(n, t) && !n[t].isEditRole;
    });
    let l = docxPermissionHook.useDocxPermissions().isEditable === false;
    return (t ? a : l) && n;
  }
  require.d(exports, {
    shouldExpandChatCanvas: function () {
      return a;
    }
  });
}