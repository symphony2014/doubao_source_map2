// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ke' to 'loadDocCopilotService'
// - Renamed export 'IW' to 'getDocCopilotBaseService'
// - Renamed export 'wT' to 'getDocCopilotService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 424080
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  let a = dependencyInjectionContainer.providerName("doc-copilot");
  let c = dependencyInjectionContainer.providerName("doc-copilot-base");
  let u = {
    usable: false
  };
  function s(e, n = false) {
    if (!u.usable) {
      if (n) {
        h(e, true);
      }
      return;
    }
    return e.editorAPI.getService(a, {
      dynamic: true
    }).get();
  }
  function d(e, n = false) {
    if (!u.usable) {
      if (n) {
        h(e, true);
      }
      return;
    }
    return e.editorAPI.getService(c, {
      dynamic: true
    }).get();
  }
  async function h(e, n = false) {
    if (n && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      if (!u.usable) {
        await docxEditorCore.loadServiceModule(e.editorAPI, a, {
          immediately: true
        });
        u.usable = true;
      }
      return e.editorAPI.getService(a, {
        dynamic: true
      }).get();
    } else {
      return await new Promise(n => {
        e.editorAPI.onServiceReady(a, e => {
          u.usable = true;
          n(e);
        });
      });
    }
  }
  require.d(exports, {
    loadDocCopilotService: function () {
      return h;
    },
    getDocCopilotBaseService: function () {
      return d;
    },
    getDocCopilotService: function () {
      return s;
    }
  });
}