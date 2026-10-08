// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'mapCommandData'
// - Renamed export 'f' to 'processCommands'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 202794
         */
module.exports = function (module, exports, require) {
  var docxShortcutCommandUtils = require("docx-shortcut-command-utils") /*id: 804220*/;
  var commandServiceProviderName = require("command-service-provider-name") /*id: 745403*/;
  function l(e, i) {
    let n = e.editorAPI.getService(commandServiceProviderName.commandServiceName, {
      optional: true
    });
    if (!n) {
      return;
    }
    let l = i.map(e => {
      let [i, [n, o = []], l = {}, a = {}] = e;
      return {
        ...l,
        ...a,
        name: i,
        handler: docxShortcutCommandUtils.composeFunctions(n, o)
      };
    });
    if (n) {
      n.enqueueData(l);
    }
  }
  function a(e, i) {
    return i.map(i => {
      i[2] = e;
      return i;
    });
  }
  require.d(exports, {
    mapCommandData: function () {
      return a;
    },
    processCommands: function () {
      return l;
    }
  });
}