// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getDocxPanelControllerIfExists'
// - Renamed export 'b' to 'getDocxPanelControllerOrThrow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 635047
         */
module.exports = function (module, exports, require) {
  var flowDocxEditorContext = require("flow-docx-editor-context") /*id: 912706*/;
  var docxPanelControllerSdk = require("docx-panel-controller-sdk") /*id: 631134*/;
  let o = () => {
    let e = flowDocxEditorContext.useEditorController();
    if (!e || !(e instanceof docxPanelControllerSdk.DocxPanelControllerSdk)) {
      throw Error("DocXPanelController is required when useController");
    }
    return e;
  };
  let s = () => {
    let e = flowDocxEditorContext.useEditorController();
    if (e && e instanceof docxPanelControllerSdk.DocxPanelControllerSdk) {
      return e;
    }
  };
  require.d(exports, {
    getDocxPanelControllerIfExists: function () {
      return s;
    },
    getDocxPanelControllerOrThrow: function () {
      return o;
    }
  });
}