// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'i' to 'chatPanelModes'
// - Resolved require(690886) to 'chat-panel-modes'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'r' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property '$s' to 'validateImages' (module 900956)
// - Updated imported property 'P' to 'PanelMode' (module 690886)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-imageedit-url-parse-plugin.b9b2b876.js
         * chunkId: 57382
         * moduleId: 734770
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  function s(n) {
    let {
      payload: o,
      openImageCanvas: t,
      phase3EndTime: s,
      prehandlerData: l = {}
    } = n;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceImageEditHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - s,
        plugin: aiActionConstants.aiActionConstants.AISpace_ImageEdit
      }
    });
    let p = Date.now();
    if (!aiSpaceInputValidators.validateImages(o)) {
      return;
    }
    let {
      images: z
    } = o;
    let d = z[0];
    if (!d) {
      return;
    }
    let {
      uri: u,
      name: c,
      width: g,
      height: _,
      initialEditTool: m
    } = d;
    let {
      url: b
    } = l;
    if (b) {
      t({
        image: {
          uri: u,
          url: b,
          name: c,
          width: g,
          height: _,
          initialEditTool: m
        },
        canvasLayoutState: chatPanelModes.PanelMode.FULL_IMMERSIVE
      });
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "aispace_jump_phase5_duration",
        meta: {
          duration: Date.now() - p,
          plugin: aiActionConstants.aiActionConstants.AISpace_ImageEdit
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}