// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'showTitlePopover'
// - Renamed export 'l' to 'isWikiCreateAllowed'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 548432
         */
module.exports = function (module, exports, require) {
  var wikiFeatureValidator = require("wiki-feature-validator") /*id: 444446*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var childDocTitleConstants = require("child-doc-title-constants") /*id: 559724*/;
  function a(e, l) {
    return new Promise(o => {
      docxEditorEventConstantsAndManager.globalEventEmitter.emit(childDocTitleConstants.childTitlePopover, {
        title: e,
        model: l,
        onConfirm: e => {
          o({
            type: "confirm",
            title: e
          });
        },
        onCancel: () => {
          o({
            type: "cancel"
          });
        }
      });
    });
  }
  function c(e) {
    let o = e.config.get("workspaceProps")?.getContainerPermission;
    return o && wikiFeatureValidator.isWikiIkEnabled(e.config) && o().canCreate && o().canClone;
  }
  require.d(exports, {
    showTitlePopover: function () {
      return a;
    },
    isWikiCreateAllowed: function () {
      return c;
    }
  });
}