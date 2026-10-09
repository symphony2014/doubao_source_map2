// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getDocLauncherIfExists'
// - Renamed export 'b' to 'getDocLauncherOrThrow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 325489
         */
module.exports = function (module, exports, require) {
  var flowDocxEditorControllerModule = require("flow-docx-editor-controller-module") /*id: 544579*/;
  var docLauncherController = require("doc-launcher-controller") /*id: 227005*/;
  let l = () => {
    let e = flowDocxEditorControllerModule.useFlowDocXEditorController();
    if (!e || !(e instanceof docLauncherController.DocLauncher)) {
      throw Error("DocXPanelController is required when useController");
    }
    return e;
  };
  let a = () => {
    let e = flowDocxEditorControllerModule.useFlowDocXEditorController();
    if (e && e instanceof docLauncherController.DocLauncher) {
      return e;
    }
  };
  require.d(exports, {
    getDocLauncherIfExists: function () {
      return a;
    },
    getDocLauncherOrThrow: function () {
      return l;
    }
  });
}