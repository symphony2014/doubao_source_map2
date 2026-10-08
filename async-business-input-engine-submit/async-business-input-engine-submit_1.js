// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'getAiEditActionContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 581606
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let r = e => {
    var n;
    return e != null && !!e.length && (e == null ? undefined : e.length) === 1 && e[0]?.type === "text" && !!((n = e[0]) === null || n === undefined ? undefined : n.extra?.is_from_ai_edit_slides_page);
  };
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var aiSlideMessageBuilder = require("ai-slide-message-builder") /*id: 329004*/;
  var getterSetterModule = require("getter-setter-module") /*id: 686512*/;
  var aiPptSlideCanvasModule = require("ai-ppt-slide-canvas-module") /*id: 186183*/;
  async function s(e) {
    let {
      refContents: t
    } = e;
    let i = getterSetterModule.getValue();
    if (!i) {
      return;
    }
    let {
      isExpand: s,
      canvasContent: c,
      matchedCanvasPluginIdentifier: d
    } = chatStoreManager.getStore("chatViewCanvasStore").getState();
    if (!s || d !== aiPptSlideCanvasModule.canvasElementId || Number(objectPathGetDefault.getObjectPathDefault(c, "resourceVersion", "")) > 0) {
      return;
    }
    let p = await i.getSelectedPositions();
    let _ = await i.getStructureVersion();
    let f = aiSlideMessageBuilder.createAiEditAction({
      artifactVersionId: objectPathGetDefault.getObjectPathDefault(c, "artifactVersionId", ""),
      presentationId: objectPathGetDefault.getObjectPathDefault(c, "docToken", ""),
      selectedPositions: p,
      structureVersion: _,
      hasRefContent: r(t)
    });
    return objectPathGetDefault.getObjectPathDefault(f, "context");
  }
  require.d(exports, {
    getAiEditActionContext: function () {
      return s;
    }
  });
}